import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Layout from "../../components/Layout/Layout";
import AboutMe from "../../components/AboutMe/AboutMe";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
