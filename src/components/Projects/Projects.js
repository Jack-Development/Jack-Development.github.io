import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import labVision from "../../Assets/Projects/labvision.png";
import text2sentiment from "../../Assets/Projects/text2sentiment.png";
import minesweeper from "../../Assets/Projects/minesweeper.png";
import mario from "../../Assets/Projects/marioC.png";
import advent from "../../Assets/Projects/advent.png";
import website from "../../Assets/Projects/website.png";
import inventory from "../../Assets/Projects/inventory.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Latest <strong className="purple">Creations</strong>
        </h1>
        <p style={{ color: "#5a3827" }}>
          Take a peek at some of the projects I've been involved with recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text2sentiment}
              title="Text2Sentiment"
              description="A flexible PyTorch-based framework for sentiment analysis tasks, easily adaptable to diverse text datasets. This project streamlines and modernizes sentiment analysis methods with PyTorch."
              ghLink="https://github.com/Jack-Development/Text2Sentiment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={labVision}
              title="LabVision"
              description="This Android application uses Google's ML Kit to identify machinery components at the University of Birmingham's Collaborative Teaching Laboratory. The machine learning models are trained using TensorFlow Lite Model Maker."
              ghLink="https://github.com/Jack-Development/LabVision"
              // demoLink="link" <--------Demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minesweeper}
              title="Minesweeper-React"
              description="An engaging recreation of the classic Minesweeper game, built using React, providing basic game interaction and grid display features."
              ghLink="https://github.com/Jack-Development/minesweeper-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={inventory}
                title="ReactManage"
                description="A frontend inventory management system developed for Student Computers, built with React. This system helps streamline inventory and task assignment within the team."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={advent}
              title="Advent of Code 2020"
              description="Advent of Code 2020. A collection of problems that were assigned over the month of December that progressively increased in difficulty leading up to the 25th."
              ghLink="https://github.com/Jack-Development/AdventOfCode2020"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              title="Jack-Development.github.io"
              description="My personal website created using React. The site serves as a professional portfolio for showcasing past projects and skillsets. It also demonstrates how to deploy React-based websites on GitHub pages."
              ghLink="https://github.com/Jack-Development/Jack-Development.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={mario}
                title="Super Mario Bros. C#"
                description="A project that recreates the classic Super Mario Bros game using C# and Visual Studio's Windows Forms Application platform. A modern interpretation of a timeless classic!"
                ghLink="https://github.com/Jack-Development/SuperMarioBros-CSharp-Remake"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
