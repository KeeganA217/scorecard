import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Link
            to="/scorecards"
            alt="Scorecards"
            className="btn btn-outline-primary mx-auto"
            style={buttonStyle}
          >
            Scorecards
          </Link>
        </Col>
        <Col>
          <Link
            to="/maintenance"
            alt="Maintenance"
            className="btn btn-outline-primary mx-auto"
            style={buttonStyle}
          >
            Maintenance
          </Link>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Link
            to="/reporting"
            alt="Reporting"
            className="btn btn-outline-primary mx-auto"
            style={buttonStyle}
          >
            Reporting
          </Link>
        </Col>
        <Col>
          <Link
            to="#!"
            alt="Sign Out"
            onClick={logoutHandler}
            className="btn btn-outline-primary mx-auto"
            style={buttonStyle}
          >
            <span>
              Sign Out{"    "} <i class="fas fa-sign-out-alt"></i>
            </span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

const buttonStyle = {
  width: "22rem",
  height: "8rem",
  display: "flex",
  flexDirection: "Column",
  justifyContent: "center",
  alignContent: "center",
  fontSize: "2rem",
};

export default HomeScreen;
