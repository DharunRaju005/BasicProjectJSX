import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

// 0 1 2
// 3 4 5
// 6 7 8

const TicTacToe = () => {
  console.log("Component rendered");
  const Square = React.memo(({ value, onClick }) => {
    return <ButtonSqr onClick={onClick}>{value}</ButtonSqr>;
  });

  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const isInitialMount = useRef(true);

  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  };

  const handleClick = (getCurrentIndex) => {
    let cpySqr = [...squares];
    if (getWinner(cpySqr) || cpySqr[getCurrentIndex] !== "") {
      return;
    }

    cpySqr[getCurrentIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySqr);
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    // Skip the side effect during the initial render
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`The match is draw !!!!!!`);
    } else if (getWinner(squares)) {
      setStatus(`The winner is ${getWinner(squares)}. Restart the game!`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <TopContainer>
      <Row>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </Row>
      <Row>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </Row>
      <Row>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </Row>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </TopContainer>
  );
};

const ButtonSqr = styled.button`
  border: 1px solid red;
  float: left;
  font-size: 40px;
  height: 100px;
  padding: 0px;
  text-align: center;
  width: 100px;
  margin-right: -1px;
  margin-top: -1px;
  cursor: pointer;
  //display: flex;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Row = styled.div``;

export default TicTacToe;
