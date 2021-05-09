import React, { useState } from "react";
import "./game.css";
import { randomSort, valuesImages } from "../helpers";
import Card from "./card";

const Board = () => {
  let val = valuesImages.concat(valuesImages).sort(randomSort);
  const [cards, setCards] = useState([...Array(16).keys()].map((n) => false));
  const [values] = useState(val);
  const [selected, setSelected] = useState([]);
  const [hits, setHits] = useState(0);
  const [triesNumber, setTryNumber] = useState(11);

  const clickHandler = (key) => {
    if (triesNumber <= 0) return;
    let newCards = [...cards];
    let newSelected = [...selected];
    let newHits = hits;
    if (newSelected.length > 1) {
      newCards[newSelected[0]] = false;
      newCards[newSelected[1]] = false;
      newSelected = [];
      setTryNumber(triesNumber - 1);
    }
    newCards[key] = true;
    newSelected.push(key);
    if (
      newSelected.length > 1 &&
      values[newSelected[0]] === values[newSelected[1]]
    ) {
      newHits++;
      newSelected = [];
    }
    setCards(newCards);
    setSelected(newSelected);
    setHits(newHits);
  };

  const restart = () => {
    setCards([...Array(16).keys()].map((n) => false));
    setSelected([]);
    setHits(0);
  };

  const cardsElements = [...Array(cards.length).keys()].map((n) => (
    <Card
      key={n}
      value={values[n]}
      active={cards[n]}
      clicked={() => clickHandler(n)}
    />
  ));

  return (
    <>
      <h1>Game</h1>
      <div className="Board">{cardsElements}</div>
      <p>
        Hits: {hits} <br />
        Try number: {triesNumber}
      </p>
      {triesNumber === 0 && <p>Try Again, click on restart.</p>}
      {hits === 8 && <p>Congratulations.</p>}
      <p>
        <button className="btn btn-success" onClick={() => restart()}>
          Restart
        </button>
      </p>
    </>
  );
};

export default Board;
