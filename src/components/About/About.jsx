import React from "react";
import AboutPhoto from "../.././assets/about_photo.png";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-page">
        <div className="about-photo">
          <img src={AboutPhoto} className="img-fluid" alt="Yaroslav Bozhak" />
        </div>
        <div className="about-block">
          <div className="about-text"></div>
          <h3>About</h3>
          <h3>I'm a Ruby, RoR Software Engineer based in London, UK.</h3>
          <div className="about-paragraph">
            <p className="fs-3">
              Hi, I'm Yaroslav Bozhak, a versatile developer skilled in frontend
              and backend technologies. With experience in Ruby, Ruby on Rails,
              RSpec, Capybara, JavaScript, React, HTML, CSS, SCSS, Bootstrap,
              Tailwind, PostgreSQL, MySQL, Docker, Git. I've contributed to
              projects ranging from dynamic websites to telemedicine platforms.
              I thrive in collaborative environments, embracing Agile
              methodologies and continuous learning. Beyond coding, I'm
              passionate about exploring new technologies and refining user
              experiences. Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
