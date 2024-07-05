const dummyData = [
  {
    id: "1",
    title: "Responsive Web Design",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2023-01-15",
    tags: ["HTML", "CSS", "Responsive Design"],
    publicLink: "https://example.com/project1",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2022-12-05",
    tags: ["React", "Node.js", "E-commerce"],
    publicLink: "https://example.com/project2",
  },
  {
    id: "3",
    title: "Mobile App Development",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2023-02-20",
    tags: ["React Native", "Mobile App"],
    publicLink: "https://example.com/project3",
  },
  {
    id: "4",
    title: "Portfolio Website",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2021-11-18",
    tags: ["HTML", "CSS", "JavaScript"],
    publicLink: "https://example.com/project4",
  },
  {
    id: "5",
    title: "Machine Learning Model",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2023-03-25",
    tags: ["Python", "Machine Learning"],
    publicLink: "https://example.com/project5",
  },
  {
    id: "6",
    title: "Game Development",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2022-09-14",
    tags: ["Unity", "C#"],
    publicLink: "https://example.com/project6",
  },
  {
    id: "7",
    title: "Weather App",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2023-05-10",
    tags: ["React", "API"],
    publicLink: "https://example.com/project7",
  },
  {
    id: "8",
    title: "Blog Platform",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2022-10-08",
    tags: ["Node.js", "Express", "MongoDB"],
    publicLink: "https://example.com/project8",
  },
  {
    id: "9",
    title: "Social Media Integration",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2023-06-15",
    tags: ["JavaScript", "API", "Social Media"],
    publicLink: "https://example.com/project9",
  },
  {
    id: "10",
    title: "AI Chatbot",
    thumbnail: "https://placehold.jp/800x600.png",
    projectDate: "2023-04-22",
    tags: ["Python", "AI", "NLP"],
    publicLink: "https://example.com/project10",
  },
];

type Status = "pending" | "fulfilled" | "rejected";

declare global {
  interface Promise<T> {
    status: Status;
    value: T;
    reason: any;
  }
}

export interface ProjectProps {
  id: string;
  title: string;
  thumbnail?: string;
  projectDate?: string;
  tags?: string[];
  publicLink?: string;
}

export function use<T>(promise: Promise<T>) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    console.log(promise);
    throw promise;
  }
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let cache = new Map();

export function fetchData(url: string): Promise<any> {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url) as Promise<any>;
}

async function getData(url: string): Promise<any> {
  if (url === "/projects") {
    return await getProjects();
  } else {
    throw Error("Not implemented");
  }
}

async function getProjects(): Promise<ProjectProps[]> {
  // Add a fake delay to make waiting noticeable.
  await sleep(5000);
  return dummyData;
}
