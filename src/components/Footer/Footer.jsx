import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import logo from "../../assets/zed logo.PNG";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Zedozed"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100015067148007"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/ET3773"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="telegram"
              >
                <ImTelegram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
