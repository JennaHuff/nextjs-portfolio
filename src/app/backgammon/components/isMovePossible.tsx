import { squareIsBlocked } from "../functions/squareIsBlocked";

export function isMovePossible(diceLeft, board, turn, startSquare, endSquare) {
    const distance = Math.abs(endSquare - startSquare);
    const whiteToPlay = turn === "white";
    const blackToPlay = turn === "black";
    if (board[startSquare].color !== turn) return false;
    if (diceLeft.includes(distance)) {
        if (squareIsBlocked(board, startSquare, endSquare)) {
            return false;
        }
        if (
            (whiteToPlay && endSquare > startSquare) ||
            (blackToPlay && endSquare < startSquare)
        ) {
            return true;
        }
    }
    return false;
}
