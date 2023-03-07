import clsx from "clsx";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { GameContext } from "../game/Game";

import styles from "./Board.module.scss";
import Cell from "./Cell";
import Row from "./Row";

function Board({ board }) {
    const { winLine } = useContext(GameContext);
    return (
        <Container>
            <table className={clsx(styles.board)}>
                <tbody>
                    {board.map((row, rIndex) => {
                        let cells = row.map((cell, cIndex) => {
                            return (
                                <Cell
                                    key={"c_" + rIndex + cIndex}
                                    x={rIndex}
                                    y={cIndex}
                                    isWonCell={
                                        winLine.filter(
                                            (xy) =>
                                                xy[0] === rIndex &&
                                                xy[1] === cIndex,
                                        ).length > 0
                                    }
                                   
                                >
                                    {cell}
                                </Cell>
                            );
                        });
                        return <Row key={"r_" + rIndex}>{cells}</Row>;
                    })}
                </tbody>
            </table>
        </Container>
    );
}

export default Board;
