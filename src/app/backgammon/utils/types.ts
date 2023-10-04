export type GameContextType = {
    gameState: IGameState;
    dispatch: React.Dispatch<GameAction>;
};

export enum GameActionKind {
    ROLL = "ROLL",
    CANCEL = "CANCEL",
    SEND_TO_JAIL = "SEND_TO_JAIL",
    MOVE_PIECE = "MOVE_PIECE",
    SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE",
}

interface IPayload {
    pieceToJail?: "white" | "black" | "";
    move?: { start: number; destination: number };
    usedDice?: number;
    errorMessage?: string;
}

export interface GameAction {
    type: GameActionKind;
    payload: IPayload;
}

export interface IGameState {
    board: ISquare[];
    turn: "white" | "black";
    dice: { left: number[]; used: number[] };
    playerAlreadyRolled: boolean;
    errorMessage: string;
}

export interface ISquare {
    id: number;
    pawns: number;
    color: "black" | "white" | "";
}
