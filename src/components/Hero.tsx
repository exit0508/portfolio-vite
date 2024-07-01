import { Link } from "wouter";
import Title from "./Title";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mb-20 mt-5">
      <div className="container">
        <p className="font-UDGothic font-bold text-3xl mb-3">こんにちは！</p>
        <Title />
      </div>
    </section>
  );
};

export default Hero;
