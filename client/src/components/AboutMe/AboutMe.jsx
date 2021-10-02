import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="about-container">
        <div className="bio">
          <div className="about-title">About Me</div>
          <div className="about-content">
            I am a full stack developer with a penchant for learning new skills
            and technologies. Due to my background as a pharmacist, I have
            extensive experience in delivering optimal outcomes for both the
            customer and business side. This, along with my track record of
            meeting goals under pressure and working with teams will make me a
            valuable asset to any organization.
          </div>
          <div className="about-buttons">
            <Link
              to={{ pathname: "https://github.com/navedrahim/" }}
              target="_blank"
            >
              <img
                className="hub"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
              />
            </Link>
            <Link
              to={{ pathname: "https://www.linkedin.com/in/naved-rahim/" }}
              target="_blank"
            >
              <img
                className="linkedin"
                src="https://i.imgur.com/vTDcgpC.png"
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
        <img
          className="face"
          src="https://i.imgur.com/XQv7eEy.png?1"
          alt="MyFace"
        />
      </div>
      <div className="skills">
        <div className="skills-title">Skills</div>
        <div className="logo-container">
          <img
            className="JS"
            src="https://i.imgur.com/WeOrZLJ.png"
            alt="JavaScript"
          />
          <img
            className="HTML"
            src="https://i.imgur.com/0mjkTMa.png"
            alt="HTML"
          />
          <img
            className="CSS"
            src="https://i.imgur.com/SVJUZqO.png"
            alt="CSS"
          />
          <img
            className="React"
            src="https://i.imgur.com/MN8qoxX.png"
            alt="React"
          />
          <img
            className="MongoDB"
            src="https://i.imgur.com/jkDtxXg.png"
            alt="MongoDB"
          />
          <img
            className="Node"
            src="https://i.imgur.com/GY6CzQp.png"
            alt="Node"
          />
          <img
            className="Express"
            src="https://i.imgur.com/E8QlwwP.jpg"
            alt="Express"
          />
          <img
            className="SQL"
            src="https://i.imgur.com/hk27NAM.png"
            alt="SQL"
          />
          <img
            className="Ruby"
            src="https://i.imgur.com/UaIc6FV.png"
            alt="Ruby"
          />
          <img
            className="Rails"
            src="https://i.imgur.com/ZdWqqNR.png"
            alt="Rails"
          />
          <img
            className="GraphQL"
            src="https://i.imgur.com/REgOLJY.png"
            alt="GraphQL"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
