interface CardData {
  icon: string;
  title: string;
  category_title: string;
  description: string;
  skills: string[];
}

export const cardsDataExport: CardData[] = [
  {
    icon: "📊",
    title: "Data Analysis",
    category_title: "data",
    description:
      "Transforming raw data into actionable insights through statistical analysis and visualization.",
    skills: [
      "Statistical Analysis",
      "Data Visualization",
      "Predictive Modeling",
      "Python & R Programming",
    ],
  },
  {
    icon: "📈",
    title: "Business Analysis",
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
    icon: "☁️",
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
