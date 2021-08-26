import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Layout from "../../components/Layout/Layout";
import AboutMe from "../../components/AboutMe/AboutMe";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <div className="landing">
          <div className="my-name">Naved Rahim</div>
          <div className="line">|</div>
          <div className="engineer">Software Engineer</div>
        </div>
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
