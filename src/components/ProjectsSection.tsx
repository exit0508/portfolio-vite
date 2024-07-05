import { fetchData, ProjectProps, use } from "@/utils/projectData";
import CardList from "./CardList";

export default function ProjectsSection() {
  const posts: ProjectProps[] = use(fetchData("/projects"));
  console.log("aaaa", posts);

  return (
    <section>
      <CardList projects={posts} />
    </section>
  );
}
