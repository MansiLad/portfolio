import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var study = this.props.resumeEducation.map(function (study, i) {
        const courses = study.relevant_courses;
        // const mainTechnologies = work.mainTech;

        var subject = courses.map((course, i) => {
          return (
            <Badge className="experience-badge mr-2 mb-2" key={i}>
              {course}
            </Badge>
          );
        });

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            icon={<img src={study.logo} style={{ maxWidth: "50px", maxHeight: "50px", borderRadius: '50%' }} alt="University Logo" />}
            key={i}
          >

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {study.degree}, {study.major}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {study.university}
            </h4>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {study.duration}
            </h5>


            {/* <div style={{ textAlign: "left", marginTop: "15px" }}>{subject}</div> */}
            <br></br>
            <h4> Relevent Courses:</h4>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {subject}
            </h4>

          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="education" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {study}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                // change to college logo
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;


// import React, { Component } from "react";


// class Education extends Component {
//   render() {

//     if (this.props.resumeEducation && this.props.resumeBasicInfo) {
//     var sectionName = this.props.resumeBasicInfo.section_name.education;
//       var university = this.props.resumeEducation.university;
//     //   var stevenslogo=
//       var dates_attended = this.props.resumeEducation.dates_attended;
//       var degree = this.props.resumeEducation.degree;
//       var major = this.props.resumeEducation.major;
//       var details = this.props.resumeEducation.details;
//     }

//     return (
//       <section id="about">
//         <div className="col-md-12">
//           <h1 style={{ color: "black" }}>
//             <span>{sectionName}</span>
//           </h1>
//           <div className="row center mx-auto mb-5">
//             <div className="col-md-4 mb-5 center">
//               <div className="polaroid">
//                 {/* <span style={{ cursor: "auto" }}>
//                   <img
//                     height="250px"
//                     src={stevenslogo}
//                     alt="Avatar placeholder"
//                   />
//                 </span> */}
//               </div>
//             </div>

//             <div className="col-md-8 center">
//               <div className="col-md-10">
//                 <div className="card">
//                   <div className="card-header">
//                     <span
//                       className="iconify"
//                       data-icon="emojione:red-circle"
//                       data-inline="false"
//                     ></span>{" "}
//                     &nbsp;{" "}
//                     <span
//                       className="iconify"
//                       data-icon="twemoji:yellow-circle"
//                       data-inline="false"
//                     ></span>{" "}
//                     &nbsp;{" "}
//                     <span
//                       className="iconify"
//                       data-icon="twemoji:green-circle"
//                       data-inline="false"
//                     ></span>
//                   </div>
//                   <div
//                     className="card-body font-trebuchet text-justify ml-3 mr-3"
//                     style={{
//                       height: "auto",
//                       fontSize: "132%",
//                       lineHeight: "200%",
//                     }} >
//                     <br />
//                     <span>{university} </span>
//                     <br />
//                     <br />
//                     {dates_attended}
//                     <br />
//                     <br />
//                     {degree}
//                     <br />
//                     <br />
//                     {major}
//                     <br />
//                     <br />
//                     {details}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Education;
