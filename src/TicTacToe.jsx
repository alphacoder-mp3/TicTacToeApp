import React, { useState } from "react";
import "./tictactoestyles.css";

export default function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [words, setWords] = useState({
    X: "X",
    O: "O",
  });

  const handleReset = () => {
    setPlayer("X");
    setBoard(Array(9).fill(null));
    setWords({ X: "X", O: "O" });
  };

  const handleClick = (index) => {
    // If the cell is already filled or the game is over, do nothing
    if (board[index] || calculateWinner(board)) return;

    // Update the board with the current player's word
    const newBoard = [...board];
    newBoard[index] = words[player];
    setBoard(newBoard);

    // Switch to the next player
    setPlayer(player === "X" ? "O" : "X");
  };

  const calculateWinner = (board) => {
    // Define all possible winning combinations
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Check if any winning combination has three words with the same letter
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board[a] &&
        board[b] &&
        board[c] &&
        board[a].charAt(0) === board[b].charAt(0) &&
        board[a].charAt(0) === board[c].charAt(0)
      ) {
        return board[a].charAt(0);
      }
    }

    // If no winning combination is found and the board is full, it's a tie
    if (board.every((cell) => cell !== null)) {
      return "tie";
    }

    // Otherwise, the game continues
    return null;
  };

  const winner = calculateWinner(board);

  return (
    <main className="tic-tac-toe">
      <section className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </section>
      <section className="status">
        {winner ? (
          winner === "tie" ? (
            <p>It's a tie!</p>
          ) : (
            <p>{`Player ${winner} wins!`}</p>
          )
        ) : (
          <p>{`Player ${player}'s turn`}</p>
        )}
      </section>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </main>
  );
}
