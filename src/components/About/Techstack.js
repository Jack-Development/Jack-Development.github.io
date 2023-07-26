import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
    SiCsharp,
    SiHtml5,
    SiSass,
    SiPytorch,
    SiPostgresql,
    SiXcode,
} from "react-icons/si";
import { FaFileCsv } from "react-icons/fa";

function Techstack() {
  return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
              <DiPython />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiCsharp/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <DiJava />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiPytorch />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiPostgresql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiHtml5 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiSass />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiXcode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <FaFileCsv />
          </Col>
      </Row>

  );
}

export default Techstack;
