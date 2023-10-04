"use client";

import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { GameProvider } from "./functions/gameContext";
import "./Backgammon.css";
import { Prison } from "./components/Prison";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import { DndProvider } from "react-dnd-multi-backend";

export default function Backgammon() {
    return (
        <GameProvider>
            <DndProvider options={HTML5toTouch}>
                <div className="backgammon-page">
                    <Header />
                    <Prison prisonColor={"white"} />
                    <Board />
                    <Prison prisonColor={"black"} />
                </div>
            </DndProvider>
        </GameProvider>
    );
}
