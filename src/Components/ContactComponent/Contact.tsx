import React from "react";
import imgSrc from "../../assests/images/waving-hand-emoji.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-section">
      <h1>
        Hi!. <img src={imgSrc} /> Would love to connect
      </h1>
      <form className="form">
        <div>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="textArea">
          <textarea rows={4} cols={50} placeholder="Message" />
        </div>
      </form>

      <div className="social-link">
        <h1>you can find me on</h1>
        <div>
          <nav>
            <ul>
              <li className="linkedin-social-link">
                <a href="https://www.linkedin.com/in/sumeet-chandel">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="github-social-link">
                <a href="https://github.com/chandelsumeet">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="gmail-social-link">
                <a href="mailto: sumeetchandel321@gmail.com?body =`Hi Sumeet`">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Contact;
