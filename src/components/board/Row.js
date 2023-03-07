import clsx from "clsx";
import styles from "./Board.module.scss"

function Row({children}) {
   return ( <tr className={clsx(styles.row)}>{children}</tr> );
}

export default Row;