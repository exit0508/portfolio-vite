import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { ProjectProps } from "../utils/projectContext";
import { lazy } from "react";

const LazyImage = lazy(() => import("./CardImage"));

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="w-auto">
      <Card key={project.id} className="h-96 flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription>{project.projectDate}</CardDescription>
        </CardHeader>
        <CardContent>
          {project.thumbnail && (
            <LazyImage src={project.thumbnail} alt={project.title} />
          )}
        </CardContent>
        <CardFooter>
          <a href={project.publicLink}>
            <div className="flex items-center">
              Read more{" "}
              <ExternalLink className="h-5 ml-2 mb-1 stroke-black/60" />
            </div>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
