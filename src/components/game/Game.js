import { createContext, useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./Game.module.scss";

import Board from "../board/Board";
import Config from "../config/Config";
import Header from "../header/Header";
import { checkWin } from "../utils/checkWin";
import WinnerModal from "../winnerModal/WinnerModal";
import bg1 from "~/static/assets/bg/bg-1.jpg";
import clsx from "clsx";

export const GameContext = createContext();

function Game() {
    const [boardSize, setBoardSize] = useState(10);

    const [isXNext, setIsXNext] = useState(false);

    const [coordinates, setCoordinates] = useState([0, 0]);

    const [winner, setWinner] = useState("");

    const [winLine, setWinLine] = useState([]);

    const [bg, setBg] = useState(bg1);

    const [board, setBoard] = useState(
        Array(boardSize).fill(Array(boardSize).fill(null)),
    );

    const handleSetBoard = useCallback((size) => {
        setBoardSize(size);
    }, []);

    useEffect(() => {
        const newBoard = Array(Number(boardSize)).fill(
            Array(Number(boardSize)).fill(null),
        );
        setBoard(newBoard);
        setWinLine([]);
        setWinner("");
    }, [boardSize]);

    const handleResetBoard = useCallback(() => {
        let size = Number(boardSize);
        setBoard(Array(size).fill(Array(size).fill(null)));
        setWinLine([]);
        setWinner("");
    }, [boardSize]);

    useEffect(() => {
        let { player, line } = checkWin(board, coordinates);
        setWinner(player);
        setWinLine(line);
    }, [isXNext,coordinates]);

    function handleClick(x, y) {
        let boardCopy = JSON.parse(JSON.stringify(board));
        if (winner || boardCopy[x][y]) return;
        let row = boardCopy[x];
        row[y] = isXNext ? "O" : "X";
        setBoard(boardCopy);
        setIsXNext((isXNext) => !isXNext);
        setCoordinates([x, y]);
    }

    const contextValues = {
        handleClick: handleClick,
        winner: winner,
        winLine: winLine,
    };

    return (
        <GameContext.Provider value={contextValues}>
            <div
                className={clsx(styles.game)}
                style={{ backgroundImage: `url(${bg})` }}
            >
                <Container className="m-auto position-relative">
                    <Header />
                    <Board board={board}/>
                    <WinnerModal
                        winner={winner}
                        handleResetBoard={handleResetBoard}
                    />
                    <Config
                        rangeSize={boardSize}
                        handleSetBoard={handleSetBoard}
                        handleResetBoard={handleResetBoard}
                    />
                </Container>
            </div>
        </GameContext.Provider>
    );
}

export default Game;
