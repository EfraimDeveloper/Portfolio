import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp } from "react-icons/fa";

const VideoHero = () => {
  return (
    <section className="hero">

      {/* VIDEO */}
    <video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  className="hero-video"
>
  <source src="/video/efradev-video.mp4" type="video/mp4" />
</video>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content text-center text-white fade-in">

        <h1 className="hero-title">
          <Typewriter
            words={[
              "Welcome to my portfolio",
              "Full Stack Developer building scalable applications",
              "C# • React • PHP • Microsoft Azure • DevOps"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <p className="hero-subtitle">
          I build modern, scalable and performant web applications
        </p>

        {/* BOTÕES */}
        <div className="hero-buttons">

          <a href="https://github.com/EfraimDeveloper" target="_blank" 
          className="btn btn-primary btn-lg"
          
          rel="noopener noreferrer">
            View Projects
          </a>

          <a
            href="https://w.app/04pdlh"
            target="_blank"
              rel="noopener noreferrer"
            className="btn btn-success btn-lg"
          >
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
};

export default VideoHero;