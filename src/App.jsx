import { useState } from "react";

function Square({value, handleSquareClick}) {

  return (
    <button
      onClick={handleSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board({handleSquareClick}) {
  const [square, setSquares]= useState(Array(9).fill(null))


  

  return (
    <>
      <div className="flex">
        <Square value={square[0]} handleSquareClick={handleCLick}/>
        <Square value={square[1]}/>
        <Square value={square[2]}/>
      </div>
      <div className="flex">
        <Square value={square[3]}/>
        <Square value={square[4]}/>
        <Square value={square[5]}/>
      </div>
      <div className="flex">
        <Square value={square[6]}/>
        <Square value={square[7]}/>
        <Square value={square[8]}/>
      </div>
    </>
  );
}
