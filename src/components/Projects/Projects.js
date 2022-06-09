import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import indiaMart from "../../Assets/Projects/indiaMart.jpg"
import meesho from "../../Assets/Projects/meesho.jpg"
import naukari from "../../Assets/Projects/naukari.jpg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indiaMart}
              isBlog={false}
              title="IndiaMart"
              description="IndiaMART is online B2B marketplace, connecting buyers with suppliers, the channel focuses on providing a platform to Small & Medium Enterprises (SMEs), Large Enterprises as well as individuals build with react.js, Chakra-UI library. Have features which allows buyers to contact seller about requirement of various product."
              link="https://india-mart-clone.netlify.app/"
              gitLink="https://github.com/deshmukh612/Indiamart-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meesho}
              isBlog={false}
              title="Meesho"
              description="The ecommerce website to purchase cholthing appreals build using html, css and javascript with gallery of different products, detailing and payment gateway."
              link="https://meeshoecom.netlify.app/"
              gitLink="https://github.com/deshmukh612/meesho-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={naukari}
              isBlog={false}
              title="Naukari.com"
              description="A web application to provide platform for job-seeker, search for vacancies and apply for it.Online Editor which supports html, css, and js code with instant view of website and supports auto save of work using Local Storage"
              link="https://practical-wilson-0e6184.netlify.app/"
              gitLink="https://github.com/deshmukh612/Naukri-Clone"
            />
          </Col>                   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
