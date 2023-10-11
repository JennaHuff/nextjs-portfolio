import { useDrag } from "react-dnd";
import { ISquare } from "../utils/types";
import BlackPawn from "/public/black-pawn.svg";
import WhitePawn from "/public/white-pawn.svg";
import Image from "next/image";

export function Pawn({ square }: { square: ISquare }) {
    const [, drag] = useDrag(() => ({
        type: "pawn",
        item: square,
    }));

    return (
        <>
            {/* <DragPreviewImage connect={preview} src={svgString} /> */}
            <div
                ref={drag}
                className="clickable"
                style={{ transform: "translate(0, 0)" }}
            >
                <Image
                    alt={`${square.color === "white" ? "white" : "black"} pawn`}
                    src={square.color === "white" ? WhitePawn : BlackPawn}
                />
            </div>
        </>
    );
}
