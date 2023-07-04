import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="Footer__container">
        <Row>
          <Col>
            <img className="logo__footer" src={Logo} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <i className="fa-brands fa-github social__icon__footer" />
            <i className="fa-brands fa-linkedin social__icon__footer" />
            <i className="fa-brands fa-twitter social__icon__footer" />
          </Col>
        </Row>
        <Row>
          <Col className="copyright">
            <p>Copy Right 2023 going to Abdulrahman Al-haleme</p>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
