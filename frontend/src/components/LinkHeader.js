import React, { Fragment, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const LinkHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        {userInfo && (
          <Fragment>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-3">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
            </ul>
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
                <a className="nav-link" href="#" onClick={logoutHandler}>
                  Sign Out
                </a>
              </li>
            </ul>
          </Fragment>
        )}
      </Container>
    </nav>
  );
};

export default LinkHeader;
