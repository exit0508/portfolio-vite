import CardList from "./CardList";
import { useProjects } from "../utils/projectContext";
import { ProjectProps, fetchData, use } from "@/utils/projectData";
import { Suspense } from "react";

const ProjectTemp = () => {
  const posts: ProjectProps[] = use(fetchData("/projects"));
  console.log("aaaa", posts);
  console.log("rendered");

  return (
    <>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            {item.title} ({item.projectDate})
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectTemp;
