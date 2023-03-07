import { createContext, useState } from "react";
import Board from "../board/Board";
import { checkWin } from "../utils/checkWin";

export const GameContext = createContext();

const initBoard = { width: 10, height: 10 };
function Game() {
    const [isXNext, setIsXNext] = useState(false);

    const [coordinates, setCoordinates] = useState([]);

    const { width, height } = initBoard;

    const [board, setBoard] = useState(
        Array(width).fill(Array(height).fill(null)),
    );
    let { player, line } = checkWin(board, coordinates);

    function handleClick(x, y) {
        let boardCopy = JSON.parse(JSON.stringify(board));
        if (player || boardCopy[x][y]) return;
        let row = boardCopy[x];
        row[y] = isXNext ? "O" : "X";
        setBoard(boardCopy);
        setIsXNext((isXNext) => !isXNext);
        setCoordinates([x, y]);
    }

    const contextValues = {
        handleClick: handleClick,
        winner: player,
        winLine: line,
    };

    return (
        <GameContext.Provider value={contextValues}>
            <div className="game">
                <Board board={board} />
            </div>
        </GameContext.Provider>
    );
}

export default Game;
