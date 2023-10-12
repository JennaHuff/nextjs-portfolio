import Image from "next/image";
import { useGame } from "../functions/useGame";
import { Dice } from "./Dice";
import infoIcon from "public/info_icon.svg";
import githubLogo from "public/github_logo.svg";

export function Header() {
    const { gameState } = useGame();

    return (
        <div className="header">
            <h3>{gameState.errorMessage}</h3>
            <div className="site-info-header">
                <h1>React Backgammon</h1>
            </div>
            <div className="game-info-header">
                <h3 id="turn-indicator">{gameState.turn}&apos;s turn, </h3>
                <Dice />
            </div>
        </div>
    );
}
