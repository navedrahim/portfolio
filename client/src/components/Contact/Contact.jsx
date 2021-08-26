import { useState } from "react";
import { createComment } from "../../services/comments";
import "./Contact.css"

const Contact = () => {
  const [comment, setComment] = useState({
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment(comment);
    setComment({
      email: "",
      message: "",
    });
    setSent(!sent);
  };

  return (
    <div id="contact">
      <form className="comment-form" onSubmit={handleSubmit}>
      <div className="contact-title">Contact Me!</div>
        <input className="input-email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
          value={comment.email}
          onChange={handleChange}
        />
        <textarea className="input-message"
          rows={3}
          name="message"
          placeholder="Your message"
          required
          value={comment.message}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          {sent === true ? "Thanks!" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
