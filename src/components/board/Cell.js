import clsx from "clsx";
import { useContext } from "react";
import { GameContext } from "../game/Game";
import styles from "./Board.module.scss";

function Cell({ children, x, y, isWonCell, isX }) {
    const { handleClick } = useContext(GameContext);
    return (
        <td
            className={clsx(styles.cell, isWonCell ? styles.win : "")}
            onClick={() => handleClick(x, y)}
        >
            <p
                className={clsx(
                    styles.content,
                    isX ? styles["x-turn"] : styles["o-turn"],
                )}
            >
                {children}
            </p>
        </td>
    );
}

export default Cell;
