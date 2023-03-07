import clsx from "clsx";
import { useContext } from "react";
import { GameContext } from "../game/Game";
import styles from "./Board.module.scss";

function Cell({ children, x, y, isWonCell }) {
    const { handleClick } = useContext(GameContext);
    console.log(isWonCell);
    return (
        <td
            className={clsx(styles.cell, isWonCell ? styles.win : "")}
            onClick={() => handleClick(x, y)}
        >
            <p className={clsx(styles.content)}>{children}</p>
        </td>
    );
}

export default Cell;
