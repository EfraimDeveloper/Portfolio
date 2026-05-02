import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>                      
    </div>
  );
}