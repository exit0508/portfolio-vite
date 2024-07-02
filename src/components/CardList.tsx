import { ProjectProps } from "../utils/projectContext";
import ProjectCard from "./ProjectCard";

type cardNum = number;

const CardList = ({
  projects,
  num,
}: {
  projects: ProjectProps[];
  num?: cardNum;
}) => {
  const filteredProjects = (num: number | undefined) => {
    if (num) {
      return projects.filter((_, index) => index < num);
    } else {
      return projects;
    }
  };
  return (
    <div className="w-full grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.isArray(filteredProjects(num)) &&
        filteredProjects(num)?.map((project) => (
          <ProjectCard key={`card-${project.id}`} project={project} />
        ))}
    </div>
  );
};

export default CardList;
