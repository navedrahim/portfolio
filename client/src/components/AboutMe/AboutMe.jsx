import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="about-container">
        <div className="about-title">About Me</div>
        <div className="about-content">
          I am a full stack developer with a penchant for learning new skills
          and technologies. Due to my background as a pharmacist, I have
          extensive experience in delivering optimal outcomes for both the
          customer and business side. This, along with my track record of
          meeting goals under pressure and working with teams will make me a
          valuable asset to any organization.
        </div>
      </div>
      <div className="skills">
        <div className="skills-title">Skills</div>
        <div className="logo-container">
          <img className="JS" src="https://i.imgur.com/WeOrZLJ.png" alt="JavaScript"/>
          <img className="HTML" src="https://i.imgur.com/0mjkTMa.png" alt="HTML"/>
          <img className="CSS" src="https://i.imgur.com/SVJUZqO.png" alt="CSS" />
          <img className="React" src="https://i.imgur.com/MN8qoxX.png" alt="React" />
          <img className="MongoDB" src="https://i.imgur.com/qb2rL9q.gif" alt="MongoDB" />
          <img className="Node" src="https://i.imgur.com/GY6CzQp.png" alt="Node" />
          <img className="Express" src="https://i.imgur.com/E8QlwwP.jpg" alt="Express" />
          <img className="SQL" src="https://i.imgur.com/71qMoa2.png" alt="SQL" />
          <img className="Ruby" src="https://i.imgur.com/UaIc6FV.png" alt="Ruby" />
          <img className="Rails" src="https://i.imgur.com/iXR21FN.png" alt="Rails" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
