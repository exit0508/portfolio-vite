import { ProjectProps } from "../utils/projectContext";
import ProjectCard from "./ProjectCard";

const CardList = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <div className="flex flex-wrap">
      {Array.isArray(projects) &&
        projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
};

export default CardList;
