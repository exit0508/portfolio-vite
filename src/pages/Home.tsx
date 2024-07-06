import Hero from "../components/Hero";
import { Suspense } from "react";
import RecentPostsSection from "@/components/RecentPostsSection";
import LoadingCards from "@/components/LoadingCards";

const Home = () => {
  return (
    <div className="container">
      <div className="pt-1">
        <Hero />
      </div>
      <h2 className="text-5xl mb-8">Recent Projects</h2>
      <Suspense fallback={<LoadingCards num={3} />}>
        <RecentPostsSection />
      </Suspense>
    </div>
  );
};

export default Home;
