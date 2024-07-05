import { fetchData, ProjectProps, use } from "@/utils/projectData";
import CardList from "./CardList";

export default function RecentPostsSection() {
  const posts: ProjectProps[] = use(fetchData("/projects"));
  console.log("aaaa", posts);

  return (
    <section>
      <CardList num={3} projects={posts} />
    </section>
  );
}
