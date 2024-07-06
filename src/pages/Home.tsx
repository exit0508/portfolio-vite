import Hero from "../components/Hero";
import { Suspense } from "react";
import LoadingCards from "@/components/LoadingCards";
import ProjectsSection from "@/components/ProjectsSection";

const Home = () => {
  return (
    <div className="container">
      <div className="pt-1">
        <Hero />
      </div>
      <h2 className="text-5xl mb-8">Recent Projects</h2>
      <Suspense fallback={<LoadingCards num={3} />}>
        <ProjectsSection mode={"home"} />
      </Suspense>
    </div>
  );
};

export default Home;
