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
};

export const skillsExport: Record<string, Skill[]> = {
  data: [
    { name: "Data Visualization", rating: 4, category: "data" },
    { name: "Data Analysis", rating: 4, category: "data" },
    { name: "Data Modeling", rating: 4, category: "data" },
    { name: "Python", rating: 5, category: "data" },
    { name: "Pandas", rating: 5, category: "data" },
    { name: "Power BI", rating: 3, category: "data" },
    { name: "Looker Studio", rating: 3, category: "data" },
    { name: "SQL", rating: 5, category: "data" },
  ],
  development: [
    { name: "Requirement Analysis", rating: 5, category: "development" },
    { name: "Business Process Management", rating: 5, category: "development" },
    { name: "Javascript", rating: 5, category: "development" },
    { name: "Python", rating: 5, category: "development" },
    { name: "Databases", rating: 5, category: "development" },
    { name: "React", rating: 5, category: "development" },
    { name: "Django", rating: 5, category: "development" },
    { name: "DRF", rating: 5, category: "development" },
  ],
  cloud: [
    { name: "Microsoft Azure", rating: 3, category: "cloud" },
    { name: "AWS", rating: 3, category: "cloud" },
    { name: "scripting", rating: 3, category: "cloud" },
    { name: "Terraform", rating: 3, category: "cloud" },
    { name: "Docker", rating: 3, category: "cloud" },
    { name: "Networking", rating: 3, category: "cloud" },
  ],
};

export const projectsExport: Record<string, Project[]> = {
  data: [
    {
      title: "Data Visualization",
      description:
        "As a data analyst I was responsible for setting up our dashboards and autmomatic alerts based on KPI's and such",
      technologies: ["SQL", "Looker Studio", "BigQuery"],
      image: "plh",
    },
    // { title: "", description: "", technologies: [""], image: "plh" },
  ],
  development: [
    {
      title: "PokeTeam",
      description:
        "A full stack application where users can log in and create their unique pokemon team.",
      technologies: ["React", "React Redux", "Django", "DRF", "PostgreSQL"],
      image: "",
    },
  ],
  cloud: [
    {
      title: "Terraform Infrastructure as Code",
      description:
        "A boiler plate setup of how setting up cloud infrastructure as code works",
      technologies: ["Terraform", "AWS"],
      image: "",
    },
  ],
};
