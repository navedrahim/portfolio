import { getProjects } from "../../services/projects";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <img
                className="screenshot"
                src={project.screenshot}
                alt={project.name}
              />
              <div className="project-name">{project.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
