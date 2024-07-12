import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="font-Roboto min-h-screen bg-primary dark:bg-gray-950 text-black dark:text-primary">
      <div className="container mx-auto p-4">
        <div className="sticky top-3 z-50">
          <Header />
        </div>
        <div className="mb-5 mt-5">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
