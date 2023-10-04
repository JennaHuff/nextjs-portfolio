// import { IGameState } from "../utils/types";
// import { isMovePossible } from "./isMovePossible";

// export function isAnyMovePossible(
//     diceLeft: number[],
//     board: IGameState["board"],
//     turn: IGameState["turn"]
// ) {
//     for (const square in board) {
//         for (const dice in diceLeft)
//             if (Number(square) + diceLeft[dice] < 26) {
//                 isMovePossible(
//                     diceLeft,
//                     board,
//                     turn,
//                     square,
//                     Number(square) + diceLeft[dice]
//                 );
//             } else {
//                 console.log("this is possible m8");
//             }
//     }
// }
