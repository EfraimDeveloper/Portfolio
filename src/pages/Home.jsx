import {projects} from "../data/projects";
import {ProjectCard} from "../components/ProjectCard";


export default function Home() {
    return (
       <main>
        <section>
            <h1>My Projects</h1>
            <p>Here are some of the projects I've worked on:</p>
        </section>

        <section>
            <h2>Project </h2>
{projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
))}

        </section>
        </main>
    );
}