class Game {
    constructor() {
        this.gameContainer = document.querySelector(".game");
        this.startBtn = document.querySelector(".btn-start");
        this.newGameBtn = document.querySelector(".btn-new-game");
        this.newPlayersBtn = document.querySelector(".btn-new-players");
        this.scoreBoard = document.querySelector(".score-board");
        this.gameMessageText = document.querySelector(".game-message-text");
        this.gameStatus = "playing";
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        this.events();
    }

    events() {
        this.startBtn.addEventListener("click", this.initializeGame.bind(this));
        this.newGameBtn.addEventListener("click", this.startNewGame.bind(this));
        this.newPlayersBtn.addEventListener(
            "click",
            this.restartWithNewPlayers.bind(this)
        );
    }

    //METHODS
    initializeGame() {
        this.setNewPlayers();
        this.startBtn.classList.add("hide");
        this.whoWentFirstLastGame = this.playerTwo;

        this.makeAndRevealBoard();
        this.setAndRevealScoreBoard();
        this.updateCurrentPlayer(true);
    }

    makeAndRevealBoard() {
        for (let i = 0; i < 9; i++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("game-square");
            newSquare.classList.add("unmarked");
            newSquare.dataset.index = i;
            newSquare.addEventListener(
                "click",
                this.handlePlayerClick.bind(this)
            );
            this.gameContainer.appendChild(newSquare);
        }
        this.gameContainer.classList.add("reveal");
        this.gameSquares = document.querySelectorAll(".game-square");
    }

    handlePlayerClick(e) {
        if (this.isGameOver()) return;
        const square = e.currentTarget;
        if (!square.classList.contains("unmarked")) return;
        square.classList.remove("unmarked");
        square.innerHTML = this.currentPlayer.symbol;
        if (this.checkForWin()) {
            this.dealWithWin();
        } else {
            this.updateCurrentPlayer();
        }
    }

    isGameOver() {
        return this.gameStatus == "over";
    }

    updateCurrentPlayer(firstTurn = false) {
        if (firstTurn) {
            if (this.whoWentFirstLastGame == this.playerOne) {
                this.currentPlayer = this.playerTwo;
                this.whoWentFirstLastGame = this.playerTwo;
                this.scoreBoard.classList.add("player-two-turn");
            } else {
                this.currentPlayer = this.playerOne;
                this.whoWentFirstLastGame = this.playerOne;
                this.scoreBoard.classList.remove("player-two-turn");
            }
            this.gameMessageText.innerHTML = `${this.currentPlayer.name} goes first.`;
        } else {
            if (this.currentPlayer == this.playerOne) {
                this.currentPlayer = this.playerTwo;
                this.scoreBoard.classList.add("player-two-turn");
            } else {
                this.currentPlayer = this.playerOne;
                this.scoreBoard.classList.remove("player-two-turn");
            }
            this.gameMessageText.innerHTML = `${this.currentPlayer.name}'s turn.`;
        }
    }

    checkForWin() {
        return this.winningConditions.some((condition) => {
            const firstSymbol = this.gameSquares[condition[0]].innerHTML;
            const isWin = condition.every((i) => {
                if (firstSymbol == "") return false;
                return this.gameSquares[i].innerHTML == firstSymbol;
            });

            if (isWin) {
                this.winningCondition = condition;
            }

            return isWin;
        });
    }

    dealWithWin() {
        this.gameStatus = "over";
        this.currentPlayer.score++;
        this.scoreBoard.classList.add("win");
        this.winningCondition.forEach((i) => {
            this.gameSquares[i].classList.add("highlight");
        });
        this.gameSquares.forEach((square) => {
            square.classList.remove("unmarked");
        });
        this.gameMessageText.innerHTML = `${this.currentPlayer.name} wins!`;
        this.gameMessageText.classList.add("bigger");
        this.updateScoreBoard();
    }

    setAndRevealScoreBoard() {
        this.scoreBoard.querySelector(
            ".score-board__symbol-one"
        ).innerHTML = this.playerOne.symbol;
        this.scoreBoard.querySelector(
            ".score-board__symbol-two"
        ).innerHTML = this.playerTwo.symbol;
        this.scoreBoard.querySelector(
            ".score-board__name-one"
        ).innerHTML = this.playerOne.name;
        this.scoreBoard.querySelector(
            ".score-board__name-two"
        ).innerHTML = this.playerTwo.name;
        this.scoreBoard.querySelector(
            ".score-board__score-one"
        ).innerHTML = this.playerOne.score;
        this.scoreBoard.querySelector(
            ".score-board__score-two"
        ).innerHTML = this.playerTwo.score;

        document.querySelector(".game-info").classList.add("reveal");
    }

    updateScoreBoard() {
        this.scoreBoard.querySelector(
            ".score-board__score-one"
        ).innerHTML = this.playerOne.score;
        this.scoreBoard.querySelector(
            ".score-board__score-two"
        ).innerHTML = this.playerTwo.score;
    }

    startNewGame() {
        this.scoreBoard.classList.remove("win");
        this.gameStatus = "playing";
        this.resetBoard();
        this.updateCurrentPlayer(true);
        this.gameMessageText.classList.remove("bigger");
    }

    resetBoard() {
        this.gameSquares.forEach((square) => {
            square.classList.add("unmarked");
            square.classList.remove("highlight");
            square.innerHTML = "";
        });
    }

    restartWithNewPlayers() {
        this.setNewPlayers();
        this.setAndRevealScoreBoard();
        this.startNewGame();
    }

    setNewPlayers() {
        this.playerOne = {
            name: prompt("Insert Player One's name: ", "Player One"),
            symbol: "X",
            score: 0,
        };
        this.playerTwo = {
            name: prompt("Insert Player Two's name: ", "Player Two"),
            symbol: "O",
            score: 0,
        };
    }
}

export default Game;
