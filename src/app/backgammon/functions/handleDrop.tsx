import { GameAction, GameActionKind, IGameState } from "../utils/types";
import { moveIsACapture } from "./moveIsACapture";

export function handleDrop(
    gameState: IGameState,
    dispatch: React.Dispatch<GameAction>,
    startSquare: number,
    endSquare: number
) {
    if (moveIsACapture(gameState.board, startSquare, endSquare)) {
        dispatch({
            type: GameActionKind.SEND_TO_JAIL,
            payload: {
                pieceToJail: gameState.board[endSquare].color,
                move: { start: startSquare, destination: endSquare },
            },
        });
    }
    dispatch({
        type: GameActionKind.MOVE_PIECE,
        payload: {
            move: { start: startSquare, destination: endSquare },
        },
    });
    return;
}
