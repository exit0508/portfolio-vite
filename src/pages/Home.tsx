import Hero from "../components/Hero";
import CardList from "../components/CardList";
import { useProjects } from "@/utils/projectContext";
import { use, ProjectProps, fetchData } from "../utils/projectData";
import ProjectTemp from "@/components/ProjectTemp";
import { startTransition, Suspense, useState } from "react";

const Home = () => {
  //const { projects } = useProjects();

  return (
    <div className="container">
      <div className="pt-1">
        <Hero />
      </div>
      <h2 className="text-5xl mb-8">Recent Projects</h2>
      <Suspense fallback={<Loading />}>
        <ProjectTemp />
      </Suspense>

      {/* <CardList num={3} projects={projects} /> */}
    </div>
  );
};

export default Home;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
