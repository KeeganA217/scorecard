import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const LinkHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              Scorecards
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              Reports
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              Sign Out
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default LinkHeader;
