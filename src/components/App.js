import React from "react";
import UnityGame from "./UnityGame";
import NavBar from "./NavBar/NavBar";
import About from "./About";
import Contact from "./Contact"
import GameControls from "./GameControls";
import PortfolioControl from "./StandardPortfolio/PortfolioControl";
import ThankYou from "./ThankYou";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const styles = {
    container: {
      width: "80vw",
      margin: "0 10vw"
    }
  }
  return (
    <Router>
      <div style={styles.container}>
        <NavBar/>
        <Switch>
          <Route exact path="/Playable_Portfolio">
            <UnityGame />
            <GameControls/>
          </Route>
          <Route path="/Playable_Portfolio/portfolio">
            <PortfolioControl />
          </Route>
          <Route path="/Playable_Portfolio/about">
            <About />
          </Route>
          <Route path="/Playable_Portfolio/contact">
            <Contact />
          </Route>
          <Route path="/Playable_Portfolio/thankyou">
            <ThankYou />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;