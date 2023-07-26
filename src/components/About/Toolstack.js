import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudio,
    SiSlack,
    SiBlender,
    SiWindows,
    SiGoogleplay,
    SiLinux,
    SiPopos,
    SiDiscord,
    SiIntellijidea,
} from "react-icons/si";
import {FaUnity} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPopos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <FaUnity />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDiscord />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSlack />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiBlender />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiIntellijidea />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGoogleplay />
        </Col>
    </Row>
  );
}

export default Toolstack;
