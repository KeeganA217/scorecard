import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header-main" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/images/CCClogowhite.png"
              width="190"
              height="80"
              className="d-inline-block"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <p
              style={{ fontWeight: "500", fontSize: "2rem", marginTop: "1rem" }}
            >
              QA Scorecard
            </p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
