import {projects} from "../data/projects";
import {ProjectCard} from "../components/ProjectCard";
export default function Home() {
    return (
       <main>
    
        <section>
            
            <h2>Project </h2>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}

        </section>
        </main>
    );
}