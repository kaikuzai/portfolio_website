import "react";
import "../styles/IndividualProjectPage.css";
import { useParams } from "react-router-dom";
import {
  individualProjectExport,
  ProjectDetail,
} from "../hooks/useProjectDetail";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const IndividualProjectPage: React.FC = () => {
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const { projectName } = useParams<{ projectName: string }>();

  useEffect(() => {
    if (projectName && individualProjectExport[projectName]) {
      setProject(individualProjectExport[projectName]);
    }
  }, [projectName]);
  // <-- If project is not found -->
  if (!project)
    return (
      <>
        <Navbar />
        <h1>Sorry we can't find the project you're looking for</h1>
      </>
    );

  // <-- If project is found -->
  return (
    <>
      <Navbar />
      <h1>{project.title}</h1>
      <h1>{project.description}</h1>
      <h1>{project.paragraph}</h1>
      <h1>{project.technologies}</h1>
    </>
  );
};

export default IndividualProjectPage;
