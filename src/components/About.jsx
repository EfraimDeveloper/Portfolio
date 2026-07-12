import React from "react";

const profileImage =
  "https://media.licdn.com/dms/image/v2/D4E03AQH4uMnP5SpAmw/profile-displayphoto-scale_400_400/B4EZwztW2NHcAg-/0/1770394059744?e=1785369600&v=beta&t=c2x1i7W9GbuBpfY3jOYUFlh8LGQie92ZDgWlnBeSXO4";

const About = () => {
  return (
    <section id="about" className="container py-0">
      <div className="row align-items-center">
        <div className="col-lg-5 text-center">
          <img
            src={profileImage}
            alt="Efraim"
            className="img-fluid rounded-circle profile-image"
          />
        </div>

    <div className="col-lg-7 mt-4 mt-lg-0 ">
        <h2 className="fw-bold mb-3">
            About Me
        </h2>
        
          <p className="lead">
            Olá! Sou <strong>Efraim Luís Marcelino</strong>, Desenvolvedor Full Stack residente em Lisboa, Portugal.
          </p>



          <p>
        Tenho experiência no desenvolvimento de aplicações web, APIs REST e integração de sistemas,
       criando soluções eficientes e escaláveis. Trabalho com tecnologias modernas de frontend, 
       backend, bases de dados e Cloud, aplicando boas práticas de programação para desenvolver 
       software de qualidade.

          </p>

        <div className="mt-4">
            <span className="badge bg-primary me-2">React</span>
            <span className="badge bg-dark me-2">Microsoft Azure</span>
            <span className="badge bg-primary me-2">.NET / ASP.NET Core</span>
            <span className="badge bg-info me-2">Sql server</span>

            <span className="badge bg-primary me-2 mt-2">PHP</span>
            <span className="badge bg-dark me-2">Laravel</span>
            <span className="badge bg-info me-2 mt-2">Mysql</span>
        
        </div>

        <a className="btn btn-primary mt-4" href="/cv/EFRAIM LUIS MARCELINO Cv-update _Linkedin.pdf" download>
            Download cv
        </a>

    </div>

      </div>
    </section>
  );
};

export default About;