export const checkWin = (board, coordinates) => {
    if (!coordinates.length) return { player: null, line: [] };
    const [x, y] = coordinates;
    const maxX = board.length;
    const maxY = board[0].length;
    let count = 0;
    let row = 0;
    let col = 0;
    let winLine = [];

    //  Check row
    while (col < board[x].length - 1) {
        if (board[x][col] !== null && board[x][col] === board[x][col + 1]) {
            winLine.push([x, col]);
            count++;
        } else {
            count = 0;
            winLine = [];
        }
        if (count === 4) {
            winLine.push([x, col + 1]);
            return { player: board[x][col], line: winLine };
        }
        col++;
    }

    //check col
    count = 0;
    winLine = [];
    while (row < board.length - 1) {
        if (board[row][y] !== null && board[row][y] === board[row + 1][y]) {
            count++;
            winLine.push([row, y]);
        } else {
            count = 0;
        }
        if (count === 4) {
            winLine.push([row + 1, y]);
            return { player: board[row][y], line: winLine };
        }
        row++;
    }

    //check main cross
    row = 0;
    col = 0;
    count = 0;
    winLine = [];
    let originMainCross = Math.abs(y - x);
    while (row < maxX - 1 && col < maxY - 1) {
        if (x === y) {
            if (
                board[row][col] &&
                board[row][col] === board[row + 1][col + 1]
            ) {
                count++;
                winLine.push([row, col]);
            } else {
                count = 0;
            }
            if (count === 4) {
                winLine.push([row + 1, col + 1]);
                return { player: board[row][col], line: winLine };
            }
            row++;
            col++;
            continue;
        }
        if (x < y) {
            if (
                board[row][originMainCross] &&
                board[row][originMainCross] ===
                    board[row + 1][originMainCross + 1]
            ) {
                count++;
                winLine.push([row, originMainCross]);
            } else {
                count = 0;
            }
            if (count === 4) {
                winLine.push([row +1, originMainCross + 1]);
                return { player: board[row][originMainCross], line: winLine };
            }
            row++;
            originMainCross++;
            if (originMainCross > maxY) break;
            continue;
        } else {
            if (
                board[originMainCross][col] &&
                board[originMainCross + 1] &&
                board[originMainCross][col] ===
                    board[originMainCross + 1][col + 1]
            ) {
                count++;
                winLine.push([originMainCross, col]);
            } else {
                count = 0;
            }
            if (count === 4) {
                winLine.push([originMainCross, col + 1]);
                return { player: board[originMainCross][col], line: winLine };
            }
            col++;
            originMainCross++;
            if (originMainCross === maxY) break;
            continue;
        }
    }

    //  check sub cross
    row = 0;
    col = 0;
    count = 0;
    let originX = x + y;
    winLine = [];
    while (row < maxX - 1 && originX > 0) {
        if (
            board[row] &&
            board[row][originX] &&
            board[row][originX] === board[row + 1][originX - 1]
        ) {
            count++;
            winLine.push([row, originX]);
        } else {
            count = 0;
        }
        if (count === 4) {
            winLine.push([row + 1, originX - 1]);
            return { player: board[row][originX], line: winLine };
        }
        if (originX === 0) break;
        row++;
        originX--;
    }
    return { player: null, line: [] };
};
