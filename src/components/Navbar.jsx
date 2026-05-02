import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      
      <a className="navbar-brand fw-bold" href="#home">
        MyPortfolio
      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-2">

          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#blog">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#cv">CV</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;