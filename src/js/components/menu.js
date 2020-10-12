class Menu {
    constructor() {
        this.mainMenu = document.querySelector(".main-menu");
        this.startBtn = document.querySelector(".btn-start");
        this.newGameBtn = document.querySelector(".btn-new-game");
        this.newPlayersBtn = document.querySelector(".btn-new-players");
        this.toggleBtn = document.querySelector(".toggle-btn");
        this.singlePlayerBtn = document.querySelector(".btn-single-player");
        this.twoPlayerBtn = document.querySelector(".btn-two-player");
        this.form = document.querySelector(".inputs-container");
        this.playerOneForm = this.form.querySelector(".player-one-form");
        this.playerOneFormName = this.form.querySelector(".player-one-name");
        this.playerOneFormSymbol = this.form.querySelector(
            ".player-one-symbol"
        );
        this.playerTwoForm = this.form.querySelector(".player-two-form");
        this.playerTwoFormName = this.form.querySelector(".player-two-name");
        this.playerTwoFormSymbol = this.form.querySelector(
            ".player-two-symbol"
        );
        this.scoreBoard = document.querySelector(".score-board");
        this.gameMessageText = document.querySelector(".game-message-text");
        this.difficultyBtn = document.querySelector(".three-way-btn");
        this.easyBtn = this.difficultyBtn.querySelector(".btn-easy");
        this.mediumBtn = this.difficultyBtn.querySelector(".btn-medium");
        this.hardBtn = this.difficultyBtn.querySelector(".btn-hard");
    }
}

export default Menu;
