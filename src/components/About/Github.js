import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        When I'm <strong className="purple">Creating</strong>
    </h1>
      <GitHubCalendar
        username="Jack-Development"
        blockSize={15}
        blockMargin={5}
        color="#FF7043"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
