import './App.css';
import {projects} from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <button className="btn btn-primary">Click me</button>
        <main>
          <section>
              <h1>My Projects</h1>
              <p>Here are some of the projects I've worked on:</p>
          </section>
  
          <section>
              <h2>Project </h2>
             {projects.map((project) => (
  <ProjectCard key={project.title} project={project} />
))}
          </section>
          </main>
      </div>
  );
}

export default App;
