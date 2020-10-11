class Menu {
    constructor() {
        this.startBtn = document.querySelector(".btn-start");
        this.newGameBtn = document.querySelector(".btn-new-game");
        this.newPlayersBtn = document.querySelector(".btn-new-players");
        this.singlePlayerBtn = document.querySelector(".btn-single-player");
        this.twoPlayerBtn = document.querySelector(".btn-two-player");
        this.form = document.querySelector(".inputs-container");
        this.playerOneInput = this.form.querySelector(".player-one");
        this.playerTwoInput = this.form.querySelector(".player-two");
        this.scoreBoard = document.querySelector(".score-board");
        this.gameMessageText = document.querySelector(".game-message-text");
    }
}

export default Menu;
