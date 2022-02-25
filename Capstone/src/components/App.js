import React from "react";
import UnityGame from "./UnityGame";
import NavBar from "./NavBar/NavBar";
import About from "./About";
import Contact from "./Contact"
import PortfolioControl from "./StandardPortfolio/PortfolioControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <Container>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <UnityGame />
          </Route>
          <Route path="/portfolio">
            <PortfolioControl />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
