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
      {loading ? (
        <h1>Error</h1>
      ) : (
        <>
          <div className="sticky top-3 translate-x-6">
            <Header />
          </div>

          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
