import React from "react";

export default function Experience({ active }) {
  return (
    <div className={`card-section${active ? " is-active" : ""}`} id="experience">
      <div className="card-content">
        <div className="card-subtitle">WORK EXPERIENCE</div>
        <div className="card-timeline">
          <div className="card-item" data-year="2021">
            <div className="card-item-title">
              Full-Stack Developer for <span>Organic</span>
            </div>
            <div className="card-item-desc">Create headless CMS use WordPress/NextJS for a News organization.</div>
          </div>
          <div className="card-item" data-year="2020">
            <div className="card-item-title">
              UI Developer at <span>Online Dossier</span>
            </div>
            <div className="card-item-desc">Use ReactJS to developed new UI for Web app.</div>
          </div>
          <div className="card-item" data-year="2018">
            <div className="card-item-title">
              Backend Developer at <span>WeSport</span>
            </div>
            <div className="card-item-desc">Use PHP to create RESTful API for booking platform.</div>
          </div>
          <div className="card-item" data-year="2016">
            <div className="card-item-title">
              Backend Developer at <span>Sunbytes</span>
            </div>
            <div className="card-item-desc">Responsible for developing web applications use CMS WordPress and maintain websites made by company.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
