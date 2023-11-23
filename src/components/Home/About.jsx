import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/zedye.jpg";
import Tilt from "react-parallax-tilt";
import { ImTelegram } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow"> Zedingil Zelalem </span>
              and I'm from <span className="yellow"> Bahir Dar,Ethiopia.</span>
              <br />
              <br />
              I am studding Software Engineering at Dire Dawa University.
              <br />
              <br />
              As a<b className="yellow"> Full-Stack </b>developer, I enjoy
              tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> HTML and PHP </b>
              as well as have knowledge in programming languages such as C++,
              Java.
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">MySQL,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zedozed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/ET3773"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="telegram"
                >
                  <ImTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100015067148007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="facebook"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
