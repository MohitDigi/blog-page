import React from "react";
import bgimage from "../images/background.png";
import logo from "../images/logo.svg";
import sign from "../images/sign.png";
import india from "../images/india.png"
import dubai from "../images/dubai.png"
import usa from "../images/us.png"
import "../styles/about.css";

const About = () => {
  return (
    <>
      <header></header>
      <main className="parent-container">
        {/* Side image */}
        <div className="main-image-section">
          <img src={bgimage} alt="bgimage" align="left" />
        </div>
        {/* Right Section */}
        <div className="info-section">
          <header className="info-header">
            <div className="logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="about-heading">
              <h1>A MESSAGE FROM</h1>
              <h2>SACHIN KHOSLA ,</h2>
              <h3>CEO & FOUNDER</h3>
            </div>
          </header>
          <main className="info-main-content">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
            <div className="signature">
              <img src={sign} alt="sign" />
              <h2>SACHIN KHOSLA,</h2>
              <h2>CEO & FOUNDER</h2>
            </div>
          </main>
          {/* Right section footer start */}
          <footer className="info-footer">
            <div className="country">
              <h2>India
                <img src={india} alt=''/>
              </h2>
              <h2>Dubai<img src={dubai} alt=''/></h2>
              <h2>US<img src={usa} alt=''/></h2>
            </div>
            <h2>www.digimantralabs.com</h2>
          </footer>
        </div>
      </main>
    </>
  );
};

export default About;
