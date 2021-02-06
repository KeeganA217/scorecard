import { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LinkHeader from "./components/LinkHeader";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ScorecardScreen from "./screens/ScorecardScreen";
import ReportingScreen from "./screens/ReportingScreen";
import MaintenanceScreen from "./screens/MaintenanceScreen";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <LinkHeader />
        <main className="py-3">
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/scorecards" component={ScorecardScreen} />
          <Route exact path="/maintenance" component={MaintenanceScreen} />
          <Route exact path="/reporting" component={ReportingScreen} />
        </main>
      </Fragment>
    </Router>
  );
}

export default App;
