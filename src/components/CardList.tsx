import { ProjectProps } from "../utils/projectContext";
import ProjectCard from "./ProjectCard";

const CardList = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <>
      {Array.isArray(projects) &&
        projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </>
  );
};

export default CardList;
