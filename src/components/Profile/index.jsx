import React from "react";
import { Helmet } from "react-helmet";
import "./profile.scss";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState("about");

  return (
    <>
      <Helmet>
        <title>Hieu Vu</title>
      </Helmet>
      <div className={`card${activeTab !== "about" ? " is-active" : ""}`} data-state={`#${activeTab}`}>
        <div className="card-header">
          <div className="card-cover"></div>
          <img className="card-avatar" src="/images/df9f396a5bb198efc1a0.jpg" alt="avatar" />
          <h1 className="card-fullname">Hieu Vu</h1>
          <h2 className="card-jobtitle">FullStack Developer</h2>
        </div>
        <div className="card-main">
          <About active={activeTab === "about"} />
          <Experience active={activeTab === "experience"} />
          <Contact active={activeTab === "contact"} />
          <div className="card-buttons">
            {["about", "experience", "contact"].map((text, index) => (
              <button key={index} onClick={() => setActiveTab(text)} className={activeTab === text ? "is-active" : ""}>
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">© william@rocheald.com</p>
    </>
  );
}
