import React from "react";
import UnityGame from "./UnityGame";
import NavBar from "./NavBar/NavBar";
import About from "./About";
import Contact from "./Contact"
import GameControls from "./GameControls";
import Portfolio from "./StandardPortfolio/Portfolio";
import ThankYou from "./ThankYou";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AppContainer from "./AppContainer";


const App = () => {
  const styles = {
    container: {
      width: "80vw",
      margin: "0 10vw"
    }
  }
  return (
    <Router>
      <AppContainer>
        <div style={styles.container}>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/game">
              <UnityGame />
              <GameControls/>
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/thankyou">
              <ThankYou />
            </Route>
          </Switch>
        </div>
      </AppContainer>
    </Router>
  );
}

export default App;
