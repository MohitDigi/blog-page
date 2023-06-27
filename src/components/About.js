import React from "react";
import bgimage from "../images/background.png";
import logo from "../images/logo.svg";
import sign from "../images/sign.png";
import india from "../images/india.png";
import dubai from "../images/dubai.png";
import usa from "../images/us.png";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <main id="first">
        <div class="container">
          <section class="image">
            <img src={bgimage} />
          </section>
          <section class="message">
            <img src={logo} id="logo" />
            <h1>A MESSAGE FROM</h1>
            <h2>SACHIN KHOSLA ,</h2>
            <h3>CEO & FOUNDER</h3>
            <main class="body-content">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
            </main>
            <div class="sign">
              <img src={sign} />
              <h4>SACHIN KHOSLA ,</h4>
              <h4>CEO & FOUNDER</h4>
            </div>
            <hr />
            <footer class="footer">
              <ul>
                <li>
                  INDIA <img src={india} />
                </li>
                <li>
                  DUBAI <img src={dubai} />
                </li>
                <li>
                  US <img src={usa} />
                </li>
              </ul>
              <p>
                <a href="https://digimantralabs.com/" target="_blank">
                  www.digimantralabs.com
                </a>
              </p>
            </footer>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
