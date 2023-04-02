import React from "react";
import ReactDOM from "react-dom";
import TicTacToe from "./TicTacToe";

export default function renderTicTacToeGame(elementId) {
  //   ReactDOM.render(<TicTacToe />, document.getElementById(elementId));
  ReactDOM.render(React.createElement(TicTacToe, null), document.getElementById(elementId));
}
