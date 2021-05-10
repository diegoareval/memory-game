import React from "react";
import "./button.css"

const NumberButton = ({ number, handleNumberButton }) => {
  return (
    <React.Fragment>
      <button className="my-btn"
        onClick={() => {
          handleNumberButton(number);
        }}
      >
        {number}
      </button>
    </React.Fragment>
  );
};

export default NumberButton;
