import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priya Deshmukh </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />I am a Electronics And Telecommunication Engineer graduate from MIT, Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Daily Diary
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Baking
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creative thinking inspires ideas, and ideas inspire change."{" "}
          </p>
          <footer className="blockquote-footer">Priya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
