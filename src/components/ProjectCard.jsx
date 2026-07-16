import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="card project-card h-100">

  {/* Carousel */}
  <div
    id={`carousel-${project.id}`}
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >

    <div className="carousel-indicators">
      {project.images.map((image, index) => (
        <button
          key={index}
          type="button"
          data-bs-target={`#carousel-${project.id}`}
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
        />
      ))}
    </div>

    <div className="carousel-inner">
      {project.images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 0 ? "active" : ""}`}
        >
          <img
            src={image}
            className="project-image"
            alt={project.title}
          />
        </div>
      ))}
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target={`#carousel-${project.id}`}
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target={`#carousel-${project.id}`}
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>

  {/* Conteúdo do card */}
  <div className="card-body d-flex flex-column">

    <h4 className="card-title fw-bold">
      {project.title}
    </h4>

    <p className="card-text">
      {project.description}
    </p>

    <div className="mb-3">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="badge bg-primary me-2 mb-2"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-auto">
      <a
        href={project.github}
        className="btn btn-dark me-2" target="_bank"
      >
        GitHub
      </a>

      <a
        href={project.demo}
        className="btn btn-primary" target="_bank"
      >
        View Project
      </a>
    </div>

  </div>

</div>
   
  );
}