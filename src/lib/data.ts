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
      "Challenge of building a company solo. App, website, brand, infrastructure.",
    url: "https://www.thegitaproject.world",
    status: "in-progress",
    accent: "#D6723B",
  },
  {
    number: "002",
    slug: "arthm",
    name: "ARTHM",
    description:
      "Experiment in proving AI-driven design can be intentional and world-class. Client call to production in a month.",
    url: "https://arthm.org",
    status: "live",
    accent: "#A68D4E",
  },
  {
    number: "003",
    slug: "pragna-skin-clinic",
    name: "Pragna Skin Clinic",
    description:
      "86 pages, 65,000 words of content. Experiment in design and content at scale. One of the best dermatology websites in India.",
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
      "Experiment in automation. Web3 news app, shipped to Play Store.",
    url: "https://getblockpulse.app",
    status: "live",
    accent: "#4A5568",
  },
  {
    number: "006",
    slug: "job-hunter",
    name: "Job Hunter",
    description:
      "Personal AI system. Telegram channels → LLM classification → dashboard. 76 relevant roles surfaced in a month.",
    status: "live",
    accent: "#7D8C6A",
  },
];
