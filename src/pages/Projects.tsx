import LoadingCards from "@/components/LoadingCards";
import CardList from "../components/CardList";
import { useProjects } from "../utils/projectContext";
import { use, ProjectProps, fetchData } from "../utils/projectData";
import ProjectTemp from "@/components/ProjectTemp";
import { Suspense } from "react";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  //const { projects } = useProjects();
  //console.log("aaaa", projects);
  // const posts: ProjectProps[] = use(fetchData("/projects"));
  // console.log(posts);

  return (
    <>
      <h2 className="text-5xl mb-8">Projects</h2>
      {/* <CardList projects={projects} /> */}
      <Suspense fallback={<LoadingCards />}>
        <ProjectsSection />
      </Suspense>
    </>
  );
};

export default Projects;
