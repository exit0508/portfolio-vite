import { fetchData, ProjectProps, use } from "@/utils/projectData";
import CardList from "./CardList";
import { useState, useEffect } from "react";
import { resolve } from "path";
import LoadingCards from "./LoadingCards";

export default function ProjectsSection() {
  const posts: ProjectProps[] = use(fetchData("/projects"));
  //console.log("aaaa", posts);
  const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (posts.length > 0) {
      let isMounted = true;

      const imagePromises = posts.map((post) => {
        if (!post.thumbnail) return Promise.resolve();

        return new Promise<void>((resolve) => {
          const img = new Image();
          if (img.src !== undefined) {
            img.src = post.thumbnail as string;
          }

          img.onload = () => {
            if (isMounted) resolve();
          };
          img.onerror = () => {
            if (isMounted) resolve();
          };
        });
      });

      Promise.all(imagePromises).then(() => {
        if (isMounted) setAllPostsLoaded(true);
      });

      return () => {
        isMounted = false; //clean-up func
      };
    }
  }, [posts]);

  if (!allPostsLoaded) {
    return (
      <div>
        <LoadingCards num={posts.length} />
      </div>
    ); // すべてのデータが読み込まれるまでローディング画面を表示
  }

  return (
    <section>
      <CardList projects={posts} />
    </section>
  );
}
