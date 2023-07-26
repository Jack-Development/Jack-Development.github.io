import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello World, I am <span className="purple">Jack Shilton </span>
            from the <span className="purple"> United Kingdom!</span>
            <br /> I am a final year student studying my Bsc in Computer Science at the University of Birmingham.
            <br />
            Recently, I completed a research project on AR/VR technologies leveraging Object Recognition AI, primarily working with Android devices and Google's MLKit.
            <br />
            <br />
            Besides my passion for problem-solving and coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning and using Japanese
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing board games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new AI technologies
            </li>
          </ul>


          <p style={{ color: "#A0522D" }}>
            "Driven by curiosity, crafting AI that redefines the impossible!"{" "}
          </p>
          <footer className="blockquote-footer">Jack</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
