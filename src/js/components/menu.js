class Menu {
    constructor() {
        this.isSinglePlayer = true;
        this.difficulty = 1;
        this.mainMenu = document.querySelector(".main-menu");
        this.startBtn = this.mainMenu.querySelector(".btn-start");
        this.newGameBtn = document.querySelector(".btn-new-game");
        this.newPlayersBtn = document.querySelector(".btn-new-players");
        this.toggleBtn = this.mainMenu.querySelector(".toggle-btn");
        this.singlePlayerBtn = this.toggleBtn.querySelector(
            ".btn-single-player"
        );
        this.twoPlayerBtn = this.toggleBtn.querySelector(".btn-two-player");
        this.form = this.mainMenu.querySelector(".inputs-container");
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
        this.difficultyBtn = this.mainMenu.querySelector(".three-way-btn");
        this.easyBtn = this.difficultyBtn.querySelector(".btn-easy");
        this.mediumBtn = this.difficultyBtn.querySelector(".btn-medium");
        this.hardBtn = this.difficultyBtn.querySelector(".btn-hard");

        this.events();
    }

    events() {
        this.singlePlayerBtn.addEventListener(
            "click",
            this.revealForm.bind(this)
        );
        this.twoPlayerBtn.addEventListener("click", this.revealForm.bind(this));
        this.easyBtn.addEventListener("click", this.setDifficulty.bind(this));
        this.mediumBtn.addEventListener("click", this.setDifficulty.bind(this));
        this.hardBtn.addEventListener("click", this.setDifficulty.bind(this));
    }

    revealForm(e) {
        if (e.currentTarget == this.singlePlayerBtn) {
            this.playerTwoForm.classList.add("hide");
            this.toggleBtn.classList.remove("switch");
            this.isSinglePlayer = true;
            this.difficultyBtn.classList.remove("hide");
        } else {
            this.playerOneForm.classList.remove("hide");
            this.playerTwoForm.classList.remove("hide");
            this.toggleBtn.classList.add("switch");
            this.isSinglePlayer = false;
            this.difficultyBtn.classList.add("hide");
        }
        this.form.classList.remove("hide");
        this.startBtn.classList.remove("hide");
    }

    setDifficulty(e) {
        const btn = e.currentTarget;
        if (btn == this.easyBtn) {
            this.difficulty = 1;
            this.difficultyBtn.classList.add("switch-easy");
            this.difficultyBtn.classList.remove("switch-medium");
            this.difficultyBtn.classList.remove("switch-hard");
        } else if (btn == this.mediumBtn) {
            this.difficulty = 5;
            this.difficultyBtn.classList.remove("switch-easy");
            this.difficultyBtn.classList.add("switch-medium");
            this.difficultyBtn.classList.remove("switch-hard");
        } else if (btn == this.hardBtn) {
            this.difficulty = -1;
            this.difficultyBtn.classList.remove("switch-easy");
            this.difficultyBtn.classList.remove("switch-medium");
            this.difficultyBtn.classList.add("switch-hard");
        }
    }

    getPlayerInfo() {
        const playerOneInfo = {
            name: this.playerOneFormName.value || "Player One",
            symbol: this.playerOneFormSymbol.value || "X",
        };

        const playerTwoInfo = {
            name: this.playerTwoFormName.value || "Player Two",
            symbol: this.playerTwoFormSymbol.value || "O",
        };

        return { playerOneInfo, playerTwoInfo };
    }
}

export default Menu;
