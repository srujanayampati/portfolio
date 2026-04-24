import React from 'react';
import profilePic from "../assets/profile.png";
import './Home.css';


const personalDetails = {
  name: "Yampati Srujana",
  phone: "+91 98765 43210",
  personalEmail: "yampatisrujana@gmail.com",
  collegeEmail: "se23ucse189@mahindrauniversity.edu.in",
  skills: ["React", "JavaScript", "Python", "HTML & CSS", "Git & GitHub", "SQL"],
};

const researchInterests = [
  "Machine Learning & AI",
  "Web Technologies",
  "Data Structures & Algorithms",
];

function Home() {
  return (
    <div className="home-container">

      {/* Hero / About Me Section */}
      <section className="hero-section">
        <div className="hero-text">
          <p className="greeting">Hi, I'm</p>
          <h1 className="hero-name">{personalDetails.name}</h1>
          <p className="hero-tagline">CS Student · Developer · Problem Solver</p>
          <p className="about-para">
            I'm a third-year Computer Science student with a passion for building
            things on the web. I enjoy learning new technologies and working on
            projects that actually solve real problems. When I'm not coding, you'll
            probably find me reading tech blogs or binge watching YouTube tutorials
            at 2am. Still figuring things out, but loving the journey!
          </p>
        </div>

        {/* Profile picture - using a placeholder avatar */}
        <div className="hero-image">
  <div className="avatar-placeholder">
    <img src={profilePic} alt="Profile" className="profile-img" />
  </div>
  <div className="avatar-ring"></div>
</div>
      </section>

      <div className="divider"></div>

      {/* Research Interests */}
      <section className="section">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          {researchInterests.map((interest, index) => (
            <div className="interest-card" key={index}>
              <span className="interest-icon">🔬</span>
              <p>{interest}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* Personal Details + Skills */}
      <section className="section details-section">

        <div className="details-card">
          <h2 className="section-title">Personal Details</h2>
          <ul className="details-list">
            <li>
              <span className="detail-label">Name</span>
              <span className="detail-value">{personalDetails.name}</span>
            </li>
            <li>
              <span className="detail-label">Phone</span>
              <span className="detail-value">{personalDetails.phone}</span>
            </li>
            <li>
              <span className="detail-label">Personal Email</span>
              <span className="detail-value">{personalDetails.personalEmail}</span>
            </li>
            <li>
              <span className="detail-label">College Email</span>
              <span className="detail-value">{personalDetails.collegeEmail}</span>
            </li>
          </ul>
        </div>

        <div className="skills-card">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {personalDetails.skills.map((skill, index) => (
              <span className="skill-badge" key={index}>{skill}</span>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;
