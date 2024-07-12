import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }


  componentDidMount() {
    this.loadSharedData();
    this.loadResumeData(); // Simplified function for loading resume data
  }

  loadResumeData() {
    const path = `res_primaryLanguage.json`; // Directly use the path for the primary language data
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: (data) => {
        this.setState({ resumeData: data });
      },
      error: (xhr, status, err) => {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />

        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Education
          resumeEducation={this.state.resumeData.education}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />

        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
       
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
