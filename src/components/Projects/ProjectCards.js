import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  console.log(props)
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.responsbilities}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.techStack}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank" style={{marginRight:'1em'}}>
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button variant="primary" href={props.gitLink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Git Hub"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
