import React from "react";
import "./game.css";
import { randomSort, valuesImages } from "../helpers";
import Card from "./card";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    let val = valuesImages.concat(valuesImages).sort(randomSort);
    this.state = {
      cards: [...Array(16).keys()].map((n) => false),
      values: val,
      selected: [],
      hits: 0,
    };
  }

  clickHandler(key) {
    let newCards = [...this.state.cards];
    let newSelected = [...this.state.selected];
    let newHits = this.state.hits;
    if (newSelected.length > 1) {
      newHits++;
      newCards[newSelected[0]] = false;
      newCards[newSelected[1]] = false;
      newSelected = [];
    }
    newCards[key] = true;
    newSelected.push(key);
    if (
      newSelected.length > 1 &&
      this.state.values[newSelected[0]] == this.state.values[newSelected[1]]
    ) {
      newSelected = [];
    }
    this.setState({ cards: newCards, selected: newSelected, hits: newHits });
  }

  render() {
    const cards = [...Array(this.state.cards.length).keys()].map((n) => (
      <Card
        key={n}
        value={this.state.values[n]}
        active={this.state.cards[n]}
        clicked={() => this.clickHandler(n)}
      />
    ));
    return (
      <>
        <h1>Memory Game</h1>
        <div className="Board">{cards}</div>
        <p>Hits: {this.state.hits}</p>
      </>
    );
  }
}
