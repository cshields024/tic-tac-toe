import { useState } from "react";
import Square from "./Square";
import CalculateWinner from "./CalculateWinner";
import BoardFull from "./BoardFull";
import Restart from "./Restart";

function Game() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [ isXNext, setIsXNext] = useState(true);
	const myX = {
		backgroundColor: "DodgerBlue"
	}
	const nextSymbol = isXNext ? "X" : "O"
	const winner = CalculateWinner(squares);

	function renderSquare(i) {
		return <Square
			value={squares[i]}
			onClick={() => {
				if (squares[i] != null || winner != null) {
					return;
				}
				const nextSquares = squares.slice();
				nextSquares[i] = nextSymbol
				setSquares(nextSquares);
				setIsXNext(!isXNext);
			}}
		/>;
	}

	function renderRestartButton() {
		return (
			<Restart
				onClick={() => {
					setSquares(Array(9).fill(null));
					setIsXNext(true);
				}}
			/>
		)
	}

	function getStatus() {
		if (winner) {
			return `Winner: ${winner}`;
		} else if (BoardFull(squares)) {
			return "Draw!";
		} else {
			return "Next Player: " + (nextSymbol);
		}
	}

	return (
		<div className="container">
			<div className="game">
				<div className="game-board">
					<div className="board-row">
						{renderSquare(0)}
						{renderSquare(1)}
						{renderSquare(2)}
					</div>
					<div className="board-row">
						{renderSquare(3)}
						{renderSquare(4)}
						{renderSquare(5)}
					</div>
					<div className="baord-row">
						{renderSquare(6)}
						{renderSquare(7)}
						{renderSquare(8)}
					</div>
				</div>
				<div className="game-info">{getStatus()}</div>
				<div className="restart-button">{renderRestartButton()}</div>
			</div>
		</div>
	)
}

export default Game;