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
import licious from "../../Assets/Projects/licious.png"


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
              imgPath={licious}
              isBlog={false}
              title="Licious"
              description="Licious is India's first D2C Unicorn, headquartered in
              Bengaluru,India. The company operates on a farm-
              to-fork model, owning the entire back-end supply chain and              
              cold chain."
              techStack="TechStack:  ReactJS | Redux | JavaScript | NodeJs | HTML | CSS"
                
              responsbilities="Areas of responsibility:
              Developed the Products, Product Details and Cart Drawer.
              Implemented filter function in the project"
              link="https://licious-flow.netlify.app/"
              gitLink="https://github.com/deshmukh612/-flowing-basketball-1538"
            />
          </Col>  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={indiaMart}
              isBlog={false}
              title="IndiaMart"
              description="IndiaMART is online B2B marketplace, connecting buyers with suppliers, the channel focuses on providing a platform to Small & Medium Enterprises (SMEs)."
              responsbilities="Areas of responsibility:
              Built authentication and integrated it with the frontend and Product Summary Page."
              techStack="TechStack:  ReactJS | Redux | JavaScript | NodeJs | HTML | CSS"
              link="https://india-mart-clone.netlify.app/"
              gitLink="https://github.com/deshmukh612/Indiamart-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meesho}
              isBlog={false}
              title="Meesho"
              description="The ecommerce website to purchase clothing Apparels build using html, css and javascript with gallery of different products, detailing and payment gateway."
              responsbilities="Areas of responsibility:
              Developed the different Products page, Product Details Page."
              techStack="TechStack:  JavaScript | HTML | CSS"
              link="https://meeshoecom.netlify.app/"
              gitLink="https://github.com/deshmukh612/meesho-clone"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={naukari}
              isBlog={false}
              title="Naukari.com"
              description="A web application to provide platform for job-seeker, search for vacancies and apply for it.Online Editor which supports html, css, and js code with instant view of website and supports auto save of work using Local Storage"
              
              link="https://practical-wilson-0e6184.netlify.app/"
              gitLink="https://github.com/deshmukh612/Naukri-Clone"
            />
          </Col>                    */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
