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
            <div className="game-info-header">
                <h3 id="turn-indicator">{gameState.turn}&apos; turn, </h3>
                <Dice />
            </div>
            <div className="site-info-header">
                <h1>React Backgammon</h1>
                <div>
                    <a
                        href="https://github.com/JennaHuff/DragAndDrop-Test"
                        target="_blank"
                    >
                        <button className="header-button">
                            <Image
                                src={githubLogo}
                                alt="github repository link"
                            />
                        </button>
                    </a>
                    <a
                        href="https://github.com/JennaHuff/DragAndDrop-Test/blob/main/README.md"
                        target="_blank"
                    >
                        <button className="header-button">
                            <Image
                                src={infoIcon}
                                alt="more information about this site"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
