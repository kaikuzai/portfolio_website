interface Skill {
  name: string;
  category: "languages" | "tools" | "databases" | "frameworks" | "cloud";
}

export const aboutSkillsExport: Skill[] = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "R", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "TypeScript", category: "languages" },

  // Tools
  { name: "Looker Studio", category: "tools" },
  { name: "Tableau", category: "tools" },
  { name: "Power BI", category: "tools" },
  { name: "JIRA", category: "tools" },
  { name: "Git", category: "tools" },

  // Databases
  { name: "PostgreSQL", category: "databases" },
  { name: "MySQL", category: "databases" },
  { name: "MongoDB", category: "databases" },

  // Frameworks
  { name: "React", category: "frameworks" },
  { name: "Django", category: "frameworks" },
  { name: "Flask", category: "frameworks" },

  // Cloud
  { name: "AWS", category: "cloud" },
  { name: "Azure", category: "cloud" },
  { name: "Google Cloud", category: "cloud" },
];
