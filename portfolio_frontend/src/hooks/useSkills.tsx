interface CardData {
  icon: string;
  title: string;
  category_title: string;
  description: string;
  skills: string[];
}

export const cardsDataExport: CardData[] = [
  {
    icon: "/data.png",
    title: "Data Analysis",
    category_title: "data",
    description:
      "Transforming raw data into actionable insights through statistical analysis and visualization.",
    skills: ["Data Analysis", "Data Visualization", "SQL", "Python"],
  },
  {
    icon: "/development.png",
    title: "Software Development",
    category_title: "development",
    description:
      "Bridging the gap between business needs and technical solutions through strategic analysis.",
    skills: [
      "Requirements Gathering",
      "Process Optimization",
      "Stakeholder Management",
      "Solution Design",
    ],
  },
  {
    icon: "/cloud.png",
    title: "Cloud Solutions",
    category_title: "cloud",
    description:
      "Designing and implementing scalable cloud infrastructure and solutions.",
    skills: [
      "AWS & Azure",
      "Cloud Architecture",
      "DevOps Practices",
      "Infrastructure as Code",
    ],
  },
];
