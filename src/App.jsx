import { useState } from "react";

function Square({ value, handleSquareClick }) {
  return (
    <button
      onClick={handleSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board({ handleSquareClick }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleCLick(i) {
    // console.log('c');
    if (squares[i]) {
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    // setSquares([...squares])
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} handleSquareClick={() => handleCLick(0)} />
        <Square value={squares[1]} handleSquareClick={() => handleCLick(1)} />
        <Square value={squares[2]} handleSquareClick={() => handleCLick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} handleSquareClick={() => handleCLick(3)} />
        <Square value={squares[4]} handleSquareClick={() => handleCLick(4)} />
        <Square value={squares[5]} handleSquareClick={() => handleCLick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} handleSquareClick={() => handleCLick(6)} />
        <Square value={squares[7]} handleSquareClick={() => handleCLick(7)} />
        <Square value={squares[8]} handleSquareClick={() => handleCLick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
}