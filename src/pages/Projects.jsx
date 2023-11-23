import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/ATM.png";
import lift from "../assets/hrs.png";
import kickstart from "../assets/SIMS.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Human Resource Management System"
              description="* Human Resource Management System (HRMS)
              * 
              * The HRMS is a Java-based application designed to streamline and automate various human resource management tasks within an organization. It provides a centralized platform for managing employee data, attendance, leave requests, performance evaluations, and more.
              * 
              * Features:
              * - Employee Management: The system allows HR administrators to maintain a comprehensive database of employee information, including personal details, job roles, and contact information.
              * - Attendance Tracking: The HRMS tracks employee attendance using various methods such as manual entry, biometric systems, or employee self-service portals.
              * - Leave Management: Employees can submit leave requests, and the system automates the approval process, tracks available leave balances, and updates employee records accordingly.
              * - Performance Evaluation: The HRMS facilitates the performance evaluation process by providing a framework for setting goals, conducting performance reviews, and generating performance reports.
              *  Used Technologies and Frameworks:
              * - Language: Java
              * - Database: MySQL DB management system
              * - User Interface: AWT and Swing."
              ghLink="https://github.com/Zedozed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="ATM Management System"
              description="Automated Teller Machine (ATM) System
              * 
              * The ATM System project is a Java-based application that simulates the functionality of an Automated Teller Machine. It provides users with various banking services, including account balance inquiry, cash withdrawal, funds transfer, and PIN change.
              * * Features:
              * - User Authentication: The ATM system includes a login feature to authenticate users.
              * * - Account Management: Users can view their account balance, transaction history, and update their PIN through the ATM interface.
              * - Cash Withdrawal: The system supports cash withdrawals, allowing users to specify the withdrawal amount and dispensing the requested cash if sufficient funds are available.
              * - Funds Transfer: Users can transfer funds between their own accounts or to other valid bank accounts. The system verifies the availability of funds and updates the account balances accordingly.
              * - PIN Change: Users can change their PIN for security purposes. The system validates the current PIN and allows users to set a new PIN.
              * * - Account Management: Users can view their account balance, transaction history, and update their PIN through the ATM interface.
 * - Cash Withdrawal: The system supports cash withdrawals, allowing users to specify the withdrawal amount and dispensing the requested cash if sufficient funds are available.
 * - Funds Transfer: Users can transfer funds between their own accounts or to other valid bank accounts. The system verifies the availability of funds and updates the account balances accordingly.
 * - PIN Change: Users can change their PIN for security purposes. The system validates the current PIN and allows users to set a new PIN.."
              ghLink="https://github.com/Zedozed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Student Information Management System"
              description="The Student Information Management System (SIMS) website is a comprehensive platform designed to manage and organize student information for educational institutions. The website serves as a centralized hub where administrators, teachers, and students can access and update student data efficiently.
              Features:

        User Authentication,Student Registration,Course Management,Attendance Tracking,Grade Management.
        Technologies Used:

Front-end: HTML, CSS, JavaScript
Back-end: PHP
Database: MySQL"
              ghLink="https://github.com/Zedozed"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
