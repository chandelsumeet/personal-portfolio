import React from "react";
import img from "../../assests/images/profile-image.jpg";
import resumeImg from "../../assests/images/download-resume.svg";
import jsImg from "../../assests/images/javascript-logo.jpg";
import cssImg from "../../assests/images/css-logo.png";
import reactImg from "../../assests/images/react-logo.png";
import htmlImg from "../../assests/images/html-logo.png";
import skillSvg from "../../assests/images/skills-svg.svg";
import twitter from "../../assests/images/twitter-logo.jpg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-img">
          <img src={img} alt="" />
        </div>
        <div className="profile-content">
          <h1>Frontend Developer</h1>
          <h3>
            Hi! I am Sumeet Chandel , a self-driven software engineer living in
            Delhi , India. I am currently working at Tata Consultancy Services.
          </h3>
        </div>
      </div>
      <div>
        <div className="heading-skills">
          <p>I can help you with these skills</p>
        </div>
        <div className="skill-grid-container">
          <div className="skill-image-container"></div>
          <div className="skill-container">
            <div className="flex-item">
              <div>
                <img src={reactImg} alt="" />
              </div>
              <h2>ReactJS</h2>
            </div>
            <div className="flex-item">
              <div>
                <div>
                  <img src={jsImg} alt="" />
                </div>
              </div>
              <h2>JavaScript</h2>
            </div>
            <div className="flex-item">
              <div>
                <img src={htmlImg} alt="" />
              </div>
              <h2>HTML</h2>
            </div>
            <div className="flex-item">
              <div>
                <img src={cssImg} alt="" />
              </div>
              <h2>CSS</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="heading-skills">
          <p>My Work Experience</p>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/tcs-1618239975.jpg"
              alt=""
            />
            <div className="card-content">
              <p className="company-heading">Tata Consultancy Services</p>
              <p>01/11/2020 - Present</p>
              <p>
                Responsible for creating hybird application and webapps using
                ReactJS , JavaScript , HTML , CSS and IONIC
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://m.economictimes.com/thumb/msid-80063428,width-1200,height-900,resizemode-4,imgsize-104653/drdo-agencies.jpg"
              alt=""
            />
            <div className="card-content">
              <p className="company-heading">AquGen Technologies</p>
              <p>01/02/2020 - 31/05/2020</p>
              <p>
                During my internship, I worked with HTML, CSS, and JavaScript to
                create web sites.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="card-content">
              <p className="company-heading">DRDO</p>
              <p>01/06/2019 - 15/07/2019</p>
              <p>
                Did research on bioagents and how they pose a threat to
                humanity.Using peak matching, I learned how to detect these
                agents
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="download-resume-container">
        <div className="heading-skills">
          <p>Want To Know More About Me</p>
        </div>
        <a href="../../assests/resume/Sumeet_React_YOE1.pdf" download>
          <img src={resumeImg} alt="" />
        </a>
      </div>
    </>
  );
};

export default Home;
