import { Route, Switch } from "wouter";
import { useProjects } from "./utils/projectContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const { loading } = useProjects();

  return (
    <div className="font-Roboto w-full min-h-screen bg-primary dark:bg-gray-950 text-black dark:text-white">
      <div className="flex justify-center md:justify-start md:ml-3">
        <Header />
      </div>

      <div className="container px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 top-10">
        {loading ? (
          <h1>Error</h1>
        ) : (
          <>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
