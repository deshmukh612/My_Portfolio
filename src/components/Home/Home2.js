import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import priya from "../../Assets/priya.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Full-Stack Web Developer with the ability to learn and collaborate in rapidly changing 
              <br />
              environments and compositions. Worked through 1000+ hours of Bootcamp structure 
              <br />
              learning JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3.
              <br />
              <br />
              My field of Interest's are building new Web Technologies and Products. 
              <br />
                         
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={priya} className="img-fluid" alt="avatar" style={{ borderRadius: "30px", width: "300px"}} />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
