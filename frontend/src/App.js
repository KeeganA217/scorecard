import { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import LinkHeader from "./components/LinkHeader";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <LinkHeader />
        <main className="py-3">
          <Container>
            <Route path="/" component={LoginScreen} />
          </Container>
        </main>
      </Fragment>
    </Router>
  );
}

export default App;
