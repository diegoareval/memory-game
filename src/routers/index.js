import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Board from "../components/game";

export default function MyApp() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/matches">
            <Board/>
          </Route>
          <Route path="/sudoku">
            <Board />
          </Route>
          <Route path="/">
            <Board />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
