import './App.css';
import {projects} from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import VideoHero from './components/VideoHero';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoHero />
      
          <section id='projects' className="container py-0">
            <div className="text-center mb-4">
              <h2 className="display-4 fw-bold">My Projects</h2>
            </div>

              <div className='row g-4'>
                  {projects.map((project) => (

                    <div key ={project.id} className='col-12 col-md-6'>
                  <ProjectCard project={project} />
                    </div>
            
           
                  ))}
              </div>

                    
          </section>

          
          <section id='about'>
            <About/>
          </section>
          
</div>

  );
}

export default App;
