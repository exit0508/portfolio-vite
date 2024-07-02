import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ProjectProps {
  id: string;
  title: string;
  thumbnail?: string;
  projectDate?: string;
  tags?: string[];
  publicLink?: string;
}

export interface ProjectsContextProps {
  projects: ProjectProps[];
  loading: boolean;
}

const ProjectContext = createContext<ProjectsContextProps | undefined>(
  undefined
);

// const dummyData = [
//   {
//     id: "1",
//     title: "Responsive Web Design",
//     thumbnail: "https://example.com/thumbnail1.jpg",
//     projectDate: "2023-01-15",
//     tags: ["HTML", "CSS", "Responsive Design"],
//     publicLink: "https://example.com/project1",
//   },
//   {
//     id: "2",
//     title: "E-commerce Platform",
//     thumbnail: "https://example.com/thumbnail2.jpg",
//     projectDate: "2022-12-05",
//     tags: ["React", "Node.js", "E-commerce"],
//     publicLink: "https://example.com/project2",
//   },
//   {
//     id: "3",
//     title: "Mobile App Development",
//     thumbnail: "https://example.com/thumbnail3.jpg",
//     projectDate: "2023-02-20",
//     tags: ["React Native", "Mobile App"],
//     publicLink: "https://example.com/project3",
//   },
//   {
//     id: "4",
//     title: "Portfolio Website",
//     thumbnail: "https://example.com/thumbnail4.jpg",
//     projectDate: "2021-11-18",
//     tags: ["HTML", "CSS", "JavaScript"],
//     publicLink: "https://example.com/project4",
//   },
//   {
//     id: "5",
//     title: "Machine Learning Model",
//     thumbnail: "https://example.com/thumbnail5.jpg",
//     projectDate: "2023-03-25",
//     tags: ["Python", "Machine Learning"],
//     publicLink: "https://example.com/project5",
//   },
//   {
//     id: "6",
//     title: "Game Development",
//     thumbnail: "https://example.com/thumbnail6.jpg",
//     projectDate: "2022-09-14",
//     tags: ["Unity", "C#"],
//     publicLink: "https://example.com/project6",
//   },
//   {
//     id: "7",
//     title: "Weather App",
//     thumbnail: "https://example.com/thumbnail7.jpg",
//     projectDate: "2023-05-10",
//     tags: ["React", "API"],
//     publicLink: "https://example.com/project7",
//   },
//   {
//     id: "8",
//     title: "Blog Platform",
//     thumbnail: "https://example.com/thumbnail8.jpg",
//     projectDate: "2022-10-08",
//     tags: ["Node.js", "Express", "MongoDB"],
//     publicLink: "https://example.com/project8",
//   },
//   {
//     id: "9",
//     title: "Social Media Integration",
//     thumbnail: "https://example.com/thumbnail9.jpg",
//     projectDate: "2023-06-15",
//     tags: ["JavaScript", "API", "Social Media"],
//     publicLink: "https://example.com/project9",
//   },
//   {
//     id: "10",
//     title: "AI Chatbot",
//     thumbnail: "https://example.com/thumbnail10.jpg",
//     projectDate: "2023-04-22",
//     tags: ["Python", "AI", "NLP"],
//     publicLink: "https://example.com/project10",
//   },
// ];

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = import.meta.env.BASE_URL as string;
  console.log(import.meta.env.MODE);

  const setBaseUrl = () => {
    if (import.meta.env.MODE === "production") {
      return BASE_URL + "/projects";
    } else {
      return "/api/projects";
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        console.log(setBaseUrl());
        const response = await fetch(setBaseUrl(), {
          mode: "cors",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        console.log("project: ", projects);
        setProjects(projects);
        //setProjects(dummyData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message ? err.message : "An unknown error occurred");
        setLoading(false);
        return error;
      }
    };
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};
