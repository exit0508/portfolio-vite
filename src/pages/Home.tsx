import { Button } from "@/components/ui/button";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import { Link } from "wouter";
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
      <Link href="/projects">
        <Button>See more</Button>
      </Link>
    </div>
  );
};

export default Home;
