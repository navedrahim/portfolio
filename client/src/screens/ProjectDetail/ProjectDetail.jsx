import { getProject, deleteProject } from "../../services/projects";
import { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const ProjectDetail = (props) => {
  const [project, setProject] = useState({});
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id);
      setProject(project);
    };
    fetchProject();
  }, [id]);

  const handleDelete = async () => {
    await deleteProject(project.id);
    setDeleted(true);
  };

  if (deleted) {
    return <Redirect to={"/"} />;
  }

  const authenticatedOptions = (
    <div className="user-buttons">
      <Link className="link" to={`/projects/${project.id}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  )
  const alwaysOptions = (
    <div className="detail-buttons">
      <Link className="link" to={{ pathname: project.github_link }} target="_blank">
        <button className="github-button">GitHub</button>
      </Link>
      <Link className="link" to={{ pathname: project.deployed_link }} target="_blank">
        <button className="deployed-button">Go to site</button>
      </Link>
    </div>
  )

  return (
    <Layout user={props.user}>
      <div className="project-detail-container">
        <img
          className="project-detail-image"
          src={project.screenshot}
          alt={project.name}
        />
        <div className="detail">
          <div className="project-detail-name">{project.name}</div>
          <div className="project-detail-description">{project.description}</div>
          <div className="button-container">
            {alwaysOptions}
            {props.user ? authenticatedOptions : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
