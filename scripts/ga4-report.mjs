#!/usr/bin/env node

import { existsSync } from "node:fs";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { config } from "dotenv";

config({ path: ".env.local", quiet: true });
config({ quiet: true });

const args = new Map(
  process.argv
    .slice(2)
    .filter((arg) => arg.startsWith("--"))
    .map((arg) => {
      const [key, ...valueParts] = arg.slice(2).split("=");
      return [key, valueParts.join("=") || "true"];
    }),
);

const days = Number(args.get("days") ?? process.env.GA4_REPORT_DAYS ?? 30);
const propertyId = normalizePropertyId(args.get("property") ?? process.env.GA4_PROPERTY_ID);
const credentialsFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!Number.isFinite(days) || days < 1) {
  fail("Set --days to a positive number.");
}

if (!propertyId) {
  fail("Set GA4_PROPERTY_ID in .env.local or pass --property=123456789.");
}

if (credentialsFile && !existsSync(credentialsFile)) {
  fail("GOOGLE_APPLICATION_CREDENTIALS points to a file that does not exist.");
}

const clientOptions = credentialsFile ? { keyFilename: credentialsFile } : {};
const client = new BetaAnalyticsDataClient(clientOptions);
const currentRange = { startDate: `${days}daysAgo`, endDate: "yesterday" };
const previousRange = { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo` };

try {
  const [currentSummary, previousSummary, pages, channels, sources, devices, countries, geoRegions, events] =
    await Promise.all([
      getSummary(currentRange),
      getSummary(previousRange),
      getRows({
        dimensions: ["pagePathPlusQueryString", "pageTitle"],
        metrics: ["screenPageViews", "activeUsers", "averageSessionDuration"],
        ...currentRange,
        limit: 10,
      }),
      getRows({
        dimensions: ["sessionDefaultChannelGroup"],
        metrics: ["sessions", "activeUsers", "engagedSessions"],
        ...currentRange,
        limit: 10,
      }),
      getRows({
        dimensions: ["sessionSourceMedium"],
        metrics: ["sessions", "activeUsers", "engagedSessions"],
        ...currentRange,
        limit: 10,
      }),
      getRows({
        dimensions: ["deviceCategory"],
        metrics: ["sessions", "activeUsers", "engagedSessions"],
        ...currentRange,
        limit: 10,
      }),
      getRows({
        dimensions: ["country"],
        metrics: ["activeUsers", "sessions"],
        ...currentRange,
        limit: 10,
      }),
      getRows({
        dimensions: ["country", "region"],
        metrics: ["activeUsers", "sessions", "averageSessionDuration", "userEngagementDuration"],
        ...currentRange,
        limit: 20,
      }),
      getRows({
        dimensions: ["eventName"],
        metrics: ["eventCount"],
        ...currentRange,
        limit: 10,
      }),
    ]);

  printDigest({
    days,
    currentSummary,
    previousSummary,
    pages,
    channels,
    sources,
    devices,
    countries,
    geoRegions,
    events,
  });
} catch (error) {
  if (error?.code === 7) {
    fail(
      "GA4 rejected the request. Make sure the signed-in OAuth user or service account has Viewer access to the GA4 property.",
    );
  }

  throw error;
}

async function getSummary(range) {
  const rows = await getRows({
    dimensions: [],
    metrics: [
      "activeUsers",
      "newUsers",
      "sessions",
      "screenPageViews",
      "engagedSessions",
      "engagementRate",
      "averageSessionDuration",
      "eventCount",
    ],
    ...range,
    limit: 1,
  });

  const row = rows[0] ?? {};
  return {
    activeUsers: number(row.activeUsers),
    newUsers: number(row.newUsers),
    sessions: number(row.sessions),
    views: number(row.screenPageViews),
    engagedSessions: number(row.engagedSessions),
    engagementRate: number(row.engagementRate),
    avgSessionSeconds: number(row.averageSessionDuration),
    eventCount: number(row.eventCount),
  };
}

async function getRows({ dimensions, metrics, startDate, endDate, limit }) {
  const [response] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate, endDate }],
    dimensions: dimensions.map((name) => ({ name })),
    metrics: metrics.map((name) => ({ name })),
    limit,
  });

  return (response.rows ?? []).map((row) => {
    const item = {};
    dimensions.forEach((name, index) => {
      item[name] = row.dimensionValues?.[index]?.value ?? "";
    });
    metrics.forEach((name, index) => {
      item[name] = row.metricValues?.[index]?.value ?? "0";
    });
    return item;
  });
}

function printDigest(data) {
  const { days, currentSummary, previousSummary, pages, channels, sources, devices, countries, geoRegions, events } = data;
  const topChannel = channels[0]?.sessionDefaultChannelGroup ?? "unknown";
  const topPage = pages[0]?.pagePathPlusQueryString ?? "unknown";

  console.log(`GA4 digest, last ${days} days`);
  console.log("");
  console.log("Topline");
  metricLine("Active users", currentSummary.activeUsers, previousSummary.activeUsers);
  metricLine("New users", currentSummary.newUsers, previousSummary.newUsers);
  metricLine("Sessions", currentSummary.sessions, previousSummary.sessions);
  metricLine("Page views", currentSummary.views, previousSummary.views);
  metricLine("Engaged sessions", currentSummary.engagedSessions, previousSummary.engagedSessions);
  metricLine("Engagement rate", currentSummary.engagementRate, previousSummary.engagementRate, {
    format: percent,
  });
  metricLine("Avg session duration", currentSummary.avgSessionSeconds, previousSummary.avgSessionSeconds, {
    format: seconds,
  });
  console.log("");
  console.log("Plain read");
  console.log(`- Main traffic channel: ${topChannel}.`);
  console.log(`- Most viewed page: ${topPage}.`);
  console.log(`- Returning signal: ${percent(currentSummary.engagementRate)} engagement rate and ${seconds(currentSummary.avgSessionSeconds)} average session time.`);
  console.log("");
  printTable("Top pages", pages, [
    ["Page", (row) => row.pagePathPlusQueryString],
    ["Title", (row) => truncate(row.pageTitle, 46)],
    ["Views", (row) => whole(row.screenPageViews)],
    ["Users", (row) => whole(row.activeUsers)],
    ["Avg time", (row) => seconds(number(row.averageSessionDuration))],
  ]);
  printTable("Channels", channels, [
    ["Channel", (row) => row.sessionDefaultChannelGroup],
    ["Sessions", (row) => whole(row.sessions)],
    ["Users", (row) => whole(row.activeUsers)],
    ["Engaged", (row) => whole(row.engagedSessions)],
  ]);
  printTable("Sources", sources, [
    ["Source", (row) => row.sessionSourceMedium],
    ["Sessions", (row) => whole(row.sessions)],
    ["Users", (row) => whole(row.activeUsers)],
  ]);
  printTable("Devices", devices, [
    ["Device", (row) => row.deviceCategory],
    ["Sessions", (row) => whole(row.sessions)],
    ["Users", (row) => whole(row.activeUsers)],
  ]);
  printTable("Countries", countries, [
    ["Country", (row) => row.country],
    ["Users", (row) => whole(row.activeUsers)],
    ["Sessions", (row) => whole(row.sessions)],
  ]);
  printTable("Country and region time", geoRegions, [
    ["Location", (row) => [row.country, row.region].filter(Boolean).join(", ")],
    ["Users", (row) => whole(row.activeUsers)],
    ["Sessions", (row) => whole(row.sessions)],
    ["Avg session", (row) => seconds(number(row.averageSessionDuration))],
    ["Avg engaged/user", (row) => seconds(number(row.userEngagementDuration) / Math.max(number(row.activeUsers), 1))],
  ]);
  printTable("Events", events, [
    ["Event", (row) => row.eventName],
    ["Count", (row) => whole(row.eventCount)],
  ]);
}

function metricLine(label, current, previous, options = {}) {
  const format = options.format ?? whole;
  console.log(`- ${label}: ${format(current)} (${change(current, previous)} vs previous period)`);
}

function printTable(title, rows, columns) {
  console.log("");
  console.log(title);

  if (!rows.length) {
    console.log("- No data.");
    return;
  }

  for (const row of rows) {
    const values = columns.map(([label, getValue]) => `${label}: ${getValue(row)}`);
    console.log(`- ${values.join(" | ")}`);
  }
}

function normalizePropertyId(value) {
  if (!value) {
    return "";
  }
  return String(value).replace(/^properties\//, "").trim();
}

function change(current, previous) {
  if (!previous) {
    return current ? "new" : "0%";
  }
  const delta = ((current - previous) / previous) * 100;
  const sign = delta > 0 ? "+" : "";
  return `${sign}${delta.toFixed(1)}%`;
}

function number(value) {
  return Number.parseFloat(value ?? "0") || 0;
}

function whole(value) {
  return Math.round(number(value)).toLocaleString("en-US");
}

function percent(value) {
  return `${(number(value) * 100).toFixed(1)}%`;
}

function seconds(value) {
  const total = Math.round(number(value));
  const minutes = Math.floor(total / 60);
  const remainder = total % 60;
  return minutes ? `${minutes}m ${remainder}s` : `${remainder}s`;
}

function truncate(value, max) {
  const text = String(value ?? "");
  return text.length > max ? `${text.slice(0, max - 3)}...` : text;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
