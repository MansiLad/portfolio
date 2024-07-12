import React, { Component } from "react";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;

        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        const outcomes = work.outcomes;
        var desc = (
          <ul className="experience-list">
            {outcomes.map((outcome, j) => (
              <li key={j} className="experience-list-item">
                {outcome}
              </li>
            ))}
          </ul>
        );

        return (
          <section id="experience">
            <div className="card">
              <div className="card-header">
                <h3>{work.title}</h3>
                <h4>{work.company}</h4>
                <h4>{work.duration}</h4>
              </div>
              <div style={{ textAlign: "left", marginTop: "15px" }}>
                {tech}
              </div>
              <br></br>
              <h4>
                {desc}
              </h4>    
          
            </div>
          </section>
        );
      });
    }

    return (
      <section id="experience" className="pb-5">
        <><div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "white" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-9 mx-auto">
            {work}
        </div></>
      </section>
    );
  }
}

export default Experience;