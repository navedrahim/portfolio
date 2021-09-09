import { createProject } from "../../services/projects";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./ProjectAdd.css";

const ProjectAdd = (props) => {
  const [project, setProject] = useState({
    name: "",
    github_link: "",
    deployed_link: "",
    description: "",
    screenshot: "",
    user_id: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
      user_id: props.user.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createProject(project);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Project Name"
          value={project.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-github"
          placeholder="Github Link"
          value={project.github_link}
          name="github_link"
          required
          onChange={handleChange}
        />
        <input
          className="input-deployed"
          placeholder="Deployed Link"
          value={project.deployed_link}
          name="deployed_link"
          required
          onChange={handleChange}
        />
        <input
          className="input-description"
          placeholder="Description"
          value={project.description}
          name="description"
          required
          onChange={handleChange}
        />
        <input
          className="input-screenshot"
          placeholder="Screenshot"
          value={project.screenshot}
          name="screenshot"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ProjectAdd;
