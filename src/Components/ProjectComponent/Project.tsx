import React, { useEffect } from "react";
import img from "../../assests/images/flipkart-image.jpg";
import twitter from "../../assests/images/twitter.jpg";
import movieLogo from "../../assests/images/movie-logo.png";
import "./Project.css";
import { Helmet } from "react-helmet";
const Project = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Here's some of my work</h1>
      <div className="grid-container">
        <div className="project-container">
          <div className="image-card">
            <a href="https://chandelsumeet.github.io/flipkart/">
              <img src={img} />
            </a>
          </div>
          <div>
            <a href="https://github.com/chandelsumeet/flipkart">
              <h2>Flipkart Github Repository</h2>
            </a>
          </div>
        </div>
        <div className="project-container">
          <div className="image-card">
            <a href="https://chandelsumeet.github.io/flipkart/">
              <img src={movieLogo} />
            </a>
          </div>
          <div>
            <a href="https://github.com/chandelsumeet/movie-finder">
              <h2>Movie Finder</h2>
            </a>
          </div>
        </div>
        <div className="project-container">
          <div className="image-card">
            <a href="https://chandelsumeet.github.io/twitter-ui-res/">
              <img src={twitter} />
            </a>
          </div>
          <div>
            <a href="https://github.com/chandelsumeet/twitter-ui-res">
              <h2>Twitter Github Repository</h2>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
