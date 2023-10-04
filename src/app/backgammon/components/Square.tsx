import { useDrop } from "react-dnd";
import { ISquare } from "../utils/types";
import { Pawn } from "./Pawn";
import { handleDrop } from "../functions/handleDrop";
import { useGame } from "../functions/useGame";
import { isMovePossible } from "./isMovePossible";

export function Square({ square }: { square: ISquare }) {
    const { gameState, dispatch } = useGame();
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "pawn",
        drop: (item: ISquare) => {
            handleDrop(gameState, dispatch, item.id, square.id);
        },
        canDrop: (item) => {
            return isMovePossible(
                gameState.dice.left,
                gameState.board,
                gameState.turn,
                item.id,
                square.id
            );
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });

    const pawns = [];

    for (let i = 0; i < square.pawns; i++) {
        pawns.push(<Pawn key={i} square={square} />);
    }

    return (
        <div
            className={`square ${canDrop && "can-drop"} ${isOver && "is-over"}`}
            ref={drop}
        >
            {/* Id: {square.id} */}
            {pawns
                .slice(0, 5) /*display a maximum of 5 pawns on a square*/
                .map((pawn) => pawn)}
            {pawns.length > 5 && `+${pawns.length - 5}`}
        </div>
    );
}
