import CardList from "../components/CardList";
import { useProjects } from "../utils/projectContext";

const Projects = () => {
  const { projects } = useProjects();
  //console.log("aaaa", projects);

  return (
    <>
      <h2 className="text-5xl mb-8">Projects</h2>
      <CardList projects={projects} />
    </>
  );
};

export default Projects;
