import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNetbeans } from "react-icons/di";
import {SiVisualstudiocode,
        SiSublimetext,
        } from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiNetbeans />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
    </Row>
  );
};

export default Toolstack;
