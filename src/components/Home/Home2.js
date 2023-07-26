import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
              INTRODUCING <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              Ever since I dived into the complex, yet captivating, world of programming, I've constantly been on a learning journey that truly never ends...
              <i>
                <b className="purple"> and I wouldn't have it any other way.</b>
              </i>
              <br />
              <br />I've honed my skills in classic languages like
              <i>
                <b className="purple"> JavaScript and C#, </b>
              </i>
              with a special fondness for harnessing the power of
              <i>
                <b className="purple">Python.</b>
              </i>
              <br />
              <br />
              I'm drawn to the vast and ever-evolving landscapes of
              <i>
                <b className="purple"> Artificial Intelligence and Natural Language Processing. </b>
              </i>
              I take pleasure in designing smart solutions that conquer challenging problems.
              <br />
              <br />
              I also love to delve into the realm of
              <i>
                <b className="purple"> AR/VR technologies. </b>
              </i>
              Leveraging platforms such as Google's MLKit for Android devices has allowed me to create immersive and engaging experiences.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT ME</h1>
            <p>
              Don't hesitate to <span className="purple">reach out </span>and connect with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jack-development"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jack-shilton-uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shiltonjack/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
