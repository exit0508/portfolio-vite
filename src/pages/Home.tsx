import Hero from "../components/Hero";
import CardList from "../components/CardList";
import { useProjects } from "@/utils/projectContext";

const Home = () => {
  const { projects } = useProjects();
  return (
    <div className="container">
      <div className="pt-1">
        <Hero />
      </div>
      <h2 className="text-5xl mb-8">Recent Projects</h2>
      <CardList num={3} projects={projects} />
    </div>
  );
};

export default Home;
