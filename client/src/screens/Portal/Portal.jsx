import { getAllComments, deleteComment } from "../../services/comments";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Portal.css";

const Portal = (props) => {
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const listComments = await getAllComments();
      setComments(listComments);
    };
    fetchComments();
  }, [toggleFetch]);

  const handleDelete = async (id) => {
    await deleteComment(id);
    setToggleFetch(!toggleFetch);
  };

  return (
    <Layout user={props.user}>
      <div className="portal">
        <Link to={"/add"}>Add Project</Link>
        <div className="message-container">
          <div className="message-title">Messages</div>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="email">{comment.email}</div>
              <div className="message">{comment.message}</div>
              <button
                className="delete-button"
                onClick={() => handleDelete(comment.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Portal;
