import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="text-center">
      <h1>Contact & Social Profiles</h1>
      <div className="row mb-3">
        <a
          href="https://www.linkedin.com/in/shreya-das-754716279/"
          className="btn btn-outline-dark col"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icons" />
          LinkedIn
        </a>
      </div>
      <div className="row mb-3">
        <a
          href="mailto:shreyadassom@gmail.com"
          className="btn btn-outline-dark col"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
          Gmail
        </a>
      </div>
      <div className="row">
        <a
          href="https://github.com/shreyadas2003"
          className="btn btn-outline-dark col"
        >
          <FontAwesomeIcon icon={faGithub} className="icons" />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
