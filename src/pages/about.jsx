import React from "react";
import "../styles/about.css";

let About = () => {
  let pdp = require("../images/pdp.png");
  let github = require("../images/github.png");
  let linkedIn = require("../images/linkedin.png");
  let mail = require("../images/mail.png");
  return (
    <>
      <section>
        <div>
          <div>
            <h1 id="aboutTitle">À propos de moi</h1>
          </div>
          <div>
            <p id="aboutDescription">
              Actuellement étudiant chez forEach Academy depuis quelques mois,
              j'apprends principalement les langages comme HTML, CSS, BootStrap,
              JavaScript, React, Java et PHP afin d'acquérir des compétences pour, à
              l'avenir devenir Développeur Full Stack.
            </p>
          </div>
        </div>
        <div id="pdp">
          <img src={pdp} alt="" />
        </div>
      </section>
      <section>
        <div id="iconsAbout">
          <a href="https://github.com/BaptisteClms" target="_blank">
            <img id="iconsGit" src={github} alt="githubLink" />
          </a>
          <a href="https://www.linkedin.com/in/baptisteclms/" target="_blank">
            <img id="iconsLinkedIn" src={linkedIn} alt="linkedInLink" />
          </a>
          <a href="mailto:baptiste.clms@gmail.com" target="_blank">
            <img id="iconsMail" src={mail} alt="mailLink" />
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
