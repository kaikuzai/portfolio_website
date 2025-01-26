export type ProjectDetail = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  paragraph: string[];
  image: string[];
  link?: string;
};

export const individualProjectExport: Record<string, ProjectDetail> = {
  "data-modeling": {
    slug: "data-modeling",
    title: "Data Visualization",
    description: "I did some data visualisation",
    technologies: ["Google Data Studio", "BigQuery", "SQL"],
    paragraph: [
      "I'd make sure that the data comes in the proper way also work with the developer to make sure that we're capturing the right data and using it in the proper way",
      "I'd work together with stakeholders to make sure that what they need to see and whatever was always available",
    ],
    image: [""],
  },
};
