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

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="pb-5 sm:w-3/4 md:w-1/4">
      <Card key={project.id} className="">
        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription>{project.projectDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={project.thumbnail} alt="thumbnail" />
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
