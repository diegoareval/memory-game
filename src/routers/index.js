import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/about/about";
import Board from "../components/matches/game";
import Sudoku from "../components/sudoku/sudoku";
import Header from "../layout/header";

export default function MyApp() {
  return (
    <Router>
      <Header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/matches">
            <Board />
          </Route>
          <Route path="/sudoku">
            <Sudoku />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Board />
          </Route>
        </Switch>
      </Header>
    </Router>
  );
}
