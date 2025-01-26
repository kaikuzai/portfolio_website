// Interfaces & Types

type Skill = {
  name: string;
  rating: number;
  category: "data" | "development" | "cloud";
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  projectLink?: string;
};

export const skillsExport: Record<string, Skill[]> = {
  data: [
    { name: "Data Visualization", rating: 4.5, category: "data" },
    { name: "SQL", rating: 5, category: "data" },
    { name: "BigQuery", rating: 5, category: "data" },
    { name: "Data Analysis", rating: 4.5, category: "data" },
    { name: "Python", rating: 4, category: "data" },
    { name: "Google Data Studio", rating: 4.5, category: "data" },
    { name: "Data Modeling", rating: 4, category: "data" },
    { name: "Python Pandas", rating: 4.5, category: "data" },
    { name: "Google Data Studio", rating: 4.5, category: "data" },
  ],
  development: [
    { name: "Requirement Analysis", rating: 4.5, category: "development" },
    {
      name: "Business Process Management",
      rating: 4.5,
      category: "development",
    },
    { name: "Javascript", rating: 4, category: "development" },
    { name: "Python", rating: 4, category: "development" },
    { name: "Databases", rating: 3, category: "development" },
    { name: "React", rating: 3, category: "development" },
    { name: "Django", rating: 4, category: "development" },
    { name: "DRF", rating: 3.5, category: "development" },
  ],
  cloud: [
    { name: "Microsoft Azure", rating: 4, category: "cloud" },
    { name: "AWS", rating: 3.5, category: "cloud" },
    { name: "Scripting", rating: 3, category: "cloud" },
    { name: "Terraform", rating: 3, category: "cloud" },
    { name: "Docker", rating: 2, category: "cloud" },
    { name: "Networking", rating: 3, category: "cloud" },
  ],
};

export const projectsExport: Record<string, Project[]> = {
  data: [
    {
      title: "Data Modeling and Reporting",
      description:
        "As a data analyst I was responsible for setting up our dashboards and autmomatic alerts based on KPI's and such",
      technologies: ["SQL", "Looker Studio", "BigQuery"],
      image: "plh",
      projectLink: "data-modeling",
    },
  ],
  development: [
    {
      title: "PokeTeam",
      description:
        "A full stack application where users can log in and create their unique pokemon team.",
      technologies: ["React", "React Redux", "Django", "DRF", "PostgreSQL"],
      image: "/projects/poketeam.png",
      link: "https://github.com/kaikuzai/poketeam",
    },
    {
      title: "Portfolio Website",
      description: "This very website you're looking at right now!",
      technologies: ["React", "React Redux"],
      image: "/projects/portfolio.png",
    },
  ],
  cloud: [
    {
      title: "Terraform Infrastructure as Code",
      description:
        "A boiler plate setup for Terraform using the AWS provider. This project sets up cloud infrastructure as code for reproducibility. This scheme sets up two EC2 instances, a loadbalancer, a virtual network and a database",
      technologies: ["Terraform", "AWS"],
      image: "/projects/terraform.jpeg",
      link: "https://github.com/kaikuzai/IaC_terraform",
    },
  ],
};
