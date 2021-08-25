import { editProject, getProject } from "../../services/projects";
import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";

const ProjectEdit = (props) => {
  const { id } = useParams();
  const [project, setProject] = useState({
    name: "",
    github_link: "",
    deployed_link: "",
    description: "",
    screenshot: "",
  });
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      const projectToEdit = await getProject(id);
      setProject(projectToEdit);
    };
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedProject = await editProject(id, project);
    if (editedProject) {
      setIsUpdated(true);
    }
  };

  if (isUpdated) {
    return <Redirect to={`/projects/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="project-edit">
        <img class="edit-image" src={project.screenshot} alt={project.name} />
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-screenshot"
            placeholder="Screenshot"
            value={project.screenshot}
            name="screenshot"
            required
            autoFocus
            onChange={handleChange}
          />
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
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProjectEdit;
