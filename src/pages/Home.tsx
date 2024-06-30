import Hero from "../components/Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="container">
      <div className="pt-1">
        <Hero />
      </div>
      <Projects />
    </div>
  );
};

export default Home;
