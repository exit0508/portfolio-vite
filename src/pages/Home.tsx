import Hero from "../components/Hero";
import { Suspense } from "react";
import LoadingCards from "@/components/LoadingCards";
import ProjectsSection from "@/components/ProjectsSection";

const Home = () => {
  return (
    <div className="container">
      <div className="mt-8 mb-10">
        <Hero />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
        <Suspense fallback={<LoadingCards num={3} />}>
          <ProjectsSection mode={"home"} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
