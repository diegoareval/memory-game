import React, { useState, useEffect } from "react";
import generatePuzzle from "../../helpers/generate-puzzle";
import NumberButton from "../shared/numberButton";
import "./sudoku.css";
import Button from "../shared/button";

const Sudoku = () => {
  const [gameBoard, setGameBoard] = useState(generatePuzzle());
  const [isGameWon, setIsGameWon] = useState(false);
  function findIndexOfSeletedCell() {
    let x, y;
    let isFound = false;
    setGameBoard((prevBoard) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (prevBoard[i][j].isSelected) {
            x = i;
            y = j;
            isFound = true;
          }
        }
      }
      return prevBoard;
    });
    return isFound ? [x, y] : [4, 4];
  }
  useEffect(() => {
    const handleKeypress = (event) => {
      const key = event.key;
      console.log(key);

      /*
      If the key pressed is number key, Backspace, or Delete
      Then userInputValue at the selected cell is updated
      */
      if (
        key === "Backspace" ||
        key === "Delete" ||
        (!isNaN(key) && key !== "0")
      ) {
        setGameBoard((prevBoard) => {
          let updatedBoard = prevBoard.map((row, a) =>
            row.map((cell, b) => {
              if (cell.isSelected) {
                return {
                  ...cell,
                  userInputValue:
                    key === "Backspace" || key === "Delete" ? "" : key,
                };
              } else return { ...cell };
            })
          );
          return updatedBoard;
        });
      }

      if (
        key === "ArrowDown" ||
        key === "ArrowUp" ||
        key === "ArrowRight" ||
        key === "ArrowLeft"
      ) {
        const [x, y] = findIndexOfSeletedCell();
        let newX = x,
          newY = y;
        if (key === "ArrowDown") {
          newX = x + 1;
        } else if (key === "ArrowUp") {
          newX = x - 1;
        } else if (key === "ArrowRight") {
          newY = y + 1;
        } else if (key === "ArrowLeft") {
          newY = y - 1;
        }
        if (newX < 9 && newX >= 0 && newY < 9 && newY >= 0) {
          updateSelected(x, y, false);
          updateSelected(newX, newY, true);
        }
      }
    };
    document.addEventListener("keyup", handleKeypress);
  }, []);
  const makeSeleted = (i, j) => {
    setGameBoard((prevBoard) => {
      let updatedBoard = prevBoard.map((row, a) =>
        row.map((cell, b) => {
          return { ...cell, isSelected: a === i && b === j ? true : false };
        })
      );
      return updatedBoard;
    });
  };
  const updateSelected = (i, j, value) => {
    setGameBoard((prevBoard) => {
      let updatedBoard = prevBoard.map((row, a) =>
        row.map((cell, b) => {
          if (a === i && b === j) return { ...cell, isSelected: value };
          else return { ...cell };
        })
      );
      return updatedBoard;
    });
  };
  const handleNewGameButton = () => {
    setGameBoard(generatePuzzle());
  };
  const isGameSolved = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (
          board[i][j].solutionValue !== board[i][j].userInputValue &&
          !board[i][j].partOfInitialPuzzle
        ) {
          return false;
        }
      }
    }
    return true;
  };
  function handleNumberButton(n) {
    setGameBoard((prevBoard) => {
      let updatedBoard = prevBoard.map((row, a) =>
        row.map((cell, b) => {
          if (cell.isSelected === true) {
            return { ...cell, userInputValue: n };
          } else {
            return { ...cell };
          }
        })
      );
      console.log(updatedBoard);
      setIsGameWon(isGameSolved(updatedBoard));
      return updatedBoard;
    });
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Sudoku</h1>
        <div className="top-bar">
          {/*
          TODO:
          Select difficulty from options
          Toggle to turn of 'Check for mistakes'
          */}
        </div>
        {isGameWon && <div className="game-won-message">Game won</div>}
        <div>
          <div className="game-board">
            <table>
              <tbody>
                {gameBoard.map((row, i) => {
                  const tr = row.map((cell, j) => {
                    const classes = cell.isSelected ? `selected` : "";
                    const cellValue = cell.partOfInitialPuzzle
                      ? cell.solutionValue
                      : cell.userInputValue;
                    return (
                      <td
                        key={`${i}-${j}`}
                        className={classes}
                        onClick={() => makeSeleted(i, j)}
                      >
                        {cell.partOfInitialPuzzle ? (
                          <strong>{cellValue}</strong>
                        ) : (
                          <span>{cellValue}</span>
                        )}
                      </td>
                    );
                  });
                  return <tr key={i}>{tr}</tr>;
                })}
              </tbody>
            </table>
            <div className="num-board">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <NumberButton
                  key={number}
                  number={number}
                  handleNumberButton={handleNumberButton}
                />
              ))}
            </div>
          </div>
          <br />
          <div className="button-pane">
            <Button action={handleNewGameButton} title="New Game" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sudoku;
