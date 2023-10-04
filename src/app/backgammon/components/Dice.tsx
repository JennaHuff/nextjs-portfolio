import Image from "next/image";
import { useGame } from "../functions/useGame";
import { GameActionKind } from "../utils/types";
import rollDice from "public/roll_dice.svg";

const DiceImages = [
    "/dice1.svg",
    "/dice2.svg",
    "/dice3.svg",
    "/dice4.svg",
    "/dice5.svg",
    "/dice6.svg",
];
export function Dice() {
    const { gameState, dispatch } = useGame();
    return gameState.dice.left.length ? (
        <div>
            {gameState.dice.left.map((dice, index) => (
                <Image
                    key={index}
                    src={DiceImages[dice - 1]}
                    alt={dice.toString()}
                    height={60}
                    width={60}
                />
            ))}
        </div>
    ) : (
        <>
            <button
                onClick={() =>
                    dispatch({ type: GameActionKind.ROLL, payload: {} })
                }
                id="dice-roll-button"
            >
                <Image src={rollDice} alt="roll dice!" />
                <Image src={rollDice} alt="roll dice!" />
            </button>
            <h3>roll the dice!</h3>
        </>
    );
}
