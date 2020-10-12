import Board from "./board";

class Player {
    constructor(name = "CPU", symbol = "O") {
        this.name = name;
        this.symbol = symbol;
        this.score = 0;
    }
}

export default Player;
