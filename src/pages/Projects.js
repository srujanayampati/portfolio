import React from 'react';
import './Projects.css';

// Add your own projects here - these are sample ones for the assignment
const projects = [
  {
    id: 1,
    title: "Student Expense Tracker",
    description:
      "A web app to help college students track their monthly expenses and manage a budget. Users can add expenses by category (food, transport, etc.), view a summary, and get alerts when they're close to the limit. Built with React for the frontend and localStorage for saving data.",
    techStack: ["React", "JavaScript", "CSS", "LocalStorage"],
    githubLink: "https://github.com/srujanayampati",
    emoji: "💸",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A simple weather application that fetches real-time weather data using the OpenWeatherMap API. Users can search for any city and see temperature, humidity, wind speed, and a 5-day forecast. I built this to practice API integration and async JavaScript.",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    githubLink: "https://github.com/srujanayampati",
    emoji: "🌤️",
  },
  {
    id: 3,
    title: "Student Result Management System",
    description:
      "A Python-based CLI application to manage student marks and generate result reports. Supports adding students, entering marks for multiple subjects, computing GPA, and exporting results to a CSV file. Made this as a mini project for the DBMS course.",
    techStack: ["Python", "MySQL", "CSV"],
    githubLink:"https://github.com/srujanayampati",
    emoji: "📊",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p className="projects-subtitle">
          Here are some things I've built — a mix of coursework, self-learning,
          and just random ideas I wanted to try out.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-emoji">{project.emoji}</div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span className="tech-badge" key={index}>{tech}</span>
              ))}
            </div>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              {/* Opens in new tab */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
