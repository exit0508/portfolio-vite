import LoadingCards from "@/components/LoadingCards";
import { Suspense } from "react";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <>
      <h2 className="text-5xl mb-8">Projects</h2>
      <Suspense fallback={<LoadingCards />}>
        <ProjectsSection mode={"projects"} />
      </Suspense>
    </>
  );
};

export default Projects;
