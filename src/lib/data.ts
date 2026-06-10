export interface Build {
  number: string;
  slug: string;
  name: string;
  description: string;
  url?: string;
  status?: "live" | "in-progress";
  accent: string;
}

export const builds: Build[] = [
  {
    number: "001",
    slug: "the-gita-project",
    name: "The Gita Project",
    description:
      "Starting with the Gita. Building toward something much bigger.",
    url: "https://www.thegitaproject.world",
    status: "in-progress",
    accent: "#D6723B",
  },
  {
    number: "002",
    slug: "arthm",
    name: "ARTHM",
    description:
      "Proving AI-driven design can be delightful, not just fast. Client call to production in a month.",
    url: "https://arthm.org",
    status: "live",
    accent: "#A68D4E",
  },
  {
    number: "003",
    slug: "pragna-skin-clinic",
    name: "Pragna Skin Clinic",
    description:
      "A dermatology site built like a clinical encyclopedia. 86 pages, 65,000 words, 10 unique designs. Built solo at a fraction of the usual cost.",
    url: "https://pragnaskinclinic.com",
    status: "live",
    accent: "#C4785A",
  },
  {
    number: "004",
    slug: "the-unbecoming",
    name: "The Unbecoming",
    description:
      "Client work. Author's website for a book on ego dissolution. Shipped.",
    url: "https://kartikeyavajpai.com",
    status: "live",
    accent: "#D4863A",
  },
  {
    number: "005",
    slug: "block-pulse",
    name: "Block Pulse",
    description:
      "An AI news app that turns hundreds of crypto articles a day into 2-minute briefings. Built and shipped to the Play Store, solo.",
    url: "https://getblockpulse.app",
    status: "live",
    accent: "#4A5568",
  },
  {
    number: "006",
    slug: "job-hunter",
    name: "Job Hunter",
    description:
      "Built AI to find me a job. It found 80+ relevant roles in a month.",
    status: "live",
    accent: "#7D8C6A",
  },
];
