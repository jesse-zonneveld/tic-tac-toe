import Board from "./board";
import Menu from "./menu";
import Player from "./player";
import CPU from "./CPU";

class GameController {
    constructor() {
        this.winner;
        this.difficulty = 1;
        this.isSinglePlayer = true;
        this.currentPlayer;
        this.menu = new Menu();
        this.board = new Board();
        this.playerOne = new Player("X");
        this.playerTwo = new Player("O");
        this.events();
    }

    events() {
        this.menu.startBtn.addEventListener(
            "click",
            this.initializeGame.bind(this)
        );
        this.menu.singlePlayerBtn.addEventListener(
            "click",
            this.revealForm.bind(this)
        );
        this.menu.twoPlayerBtn.addEventListener(
            "click",
            this.revealForm.bind(this)
        );
        this.menu.newGameBtn.addEventListener(
            "click",
            this.startNewGame.bind(this)
        );
        this.menu.newPlayersBtn.addEventListener(
            "click",
            this.restartToMenu.bind(this)
        );
        this.board.tiles.forEach((tile) =>
            tile.addEventListener("click", this.handlePlayerClick.bind(this))
        );
        this.menu.easyBtn.addEventListener(
            "click",
            this.setDifficulty.bind(this)
        );
        this.menu.mediumBtn.addEventListener(
            "click",
            this.setDifficulty.bind(this)
        );
        this.menu.hardBtn.addEventListener(
            "click",
            this.setDifficulty.bind(this)
        );
    }

    //METHODS
    initializeGame() {
        this.menu.mainMenu.classList.add("hide");
        const playerOneName = this.menu.playerOneFormName.value || "Player One";
        const playerOneSymbol = this.menu.playerOneFormSymbol.value || "X";

        this.board.revealDOMBoard();
        this.playerOne = new Player(playerOneName, playerOneSymbol);
        if (this.isSinglePlayer) {
            this.playerTwo = new CPU("CPU", "O", this.difficulty); // make computer Player
        } else {
            const playerTwoName =
                this.menu.playerTwoFormName.value || "Player Two";
            const playerTwoSymbol = this.menu.playerTwoFormSymbol.value || "O";
            this.playerTwo = new Player(playerTwoName, playerTwoSymbol);
        }

        this.whoWentFirstLastGame = this.playerTwo;
        this.updateCurrentPlayer(true);
        this.setAndRevealScoreBoard();
    }

    setDifficulty(e) {
        const btn = e.currentTarget;
        if (btn == this.menu.easyBtn) {
            this.difficulty = 1;
            this.menu.difficultyBtn.classList.add("switch-easy");
            this.menu.difficultyBtn.classList.remove("switch-medium");
            this.menu.difficultyBtn.classList.remove("switch-hard");
        } else if (btn == this.menu.mediumBtn) {
            this.difficulty = 5;
            this.menu.difficultyBtn.classList.remove("switch-easy");
            this.menu.difficultyBtn.classList.add("switch-medium");
            this.menu.difficultyBtn.classList.remove("switch-hard");
        } else if (btn == this.menu.hardBtn) {
            this.difficulty = -1;
            this.menu.difficultyBtn.classList.remove("switch-easy");
            this.menu.difficultyBtn.classList.remove("switch-medium");
            this.menu.difficultyBtn.classList.add("switch-hard");
        }
    }

    revealForm(e) {
        if (e.currentTarget == this.menu.singlePlayerBtn) {
            this.menu.playerTwoForm.classList.add("hide");
            this.menu.toggleBtn.classList.remove("switch");
            this.menu.twoPlayerBtn.classList.add("fade");
            this.menu.singlePlayerBtn.classList.remove("fade");
            this.isSinglePlayer = true;
            this.menu.difficultyBtn.classList.remove("hide");
        } else {
            this.menu.playerOneForm.classList.remove("hide");
            this.menu.playerTwoForm.classList.remove("hide");
            this.menu.toggleBtn.classList.add("switch");
            this.menu.twoPlayerBtn.classList.remove("fade");
            this.menu.singlePlayerBtn.classList.add("fade");
            this.isSinglePlayer = false;
            this.menu.difficultyBtn.classList.add("hide");
        }
        this.menu.form.classList.remove("hide");
        this.menu.startBtn.classList.remove("hide");
    }

    handlePlayerClick(e) {
        if (this.board.isGameOver()) return;
        const tile = e.currentTarget;
        const tileIndex = tile.dataset.index;
        if (!tile.classList.contains("unmarked")) return;
        this.board.markTile(this.currentPlayer.symbol, +tileIndex);
        tile.classList.remove("unmarked");
        if (this.board.isGameOver()) {
            this.handleGameOver();
        } else {
            this.updateCurrentPlayer();
        }
    }

    updateCurrentPlayer(firstTurn = false) {
        if (firstTurn) {
            if (this.whoWentFirstLastGame == this.playerOne) {
                this.currentPlayer = this.playerTwo;
                this.whoWentFirstLastGame = this.playerTwo;
                this.menu.scoreBoard.classList.add("player-two-turn");
            } else {
                this.currentPlayer = this.playerOne;
                this.whoWentFirstLastGame = this.playerOne;
                this.menu.scoreBoard.classList.remove("player-two-turn");
            }
            this.menu.gameMessageText.innerHTML = `${this.currentPlayer.name} goes first.`;
        } else {
            if (this.currentPlayer == this.playerOne) {
                this.currentPlayer = this.playerTwo;
                this.menu.scoreBoard.classList.add("player-two-turn");
            } else {
                this.currentPlayer = this.playerOne;
                this.menu.scoreBoard.classList.remove("player-two-turn");
            }
            this.menu.gameMessageText.innerHTML = `${this.currentPlayer.name}'s turn.`;
        }
        if (this.currentPlayer.name == "CPU") {
            setTimeout(this.CPUTurn.bind(this), 2000);
        }
    }

    handleGameOver() {
        if (this.board.isWin()) {
            this.currentPlayer.score++;
            this.menu.scoreBoard.classList.add("win");
            this.board.winningCondition.forEach((i) => {
                this.board.tiles[i].classList.add("highlight");
            });
            this.board.tiles.forEach((tile) => {
                tile.classList.remove("unmarked");
            });
            this.menu.gameMessageText.innerHTML = `${this.currentPlayer.name} wins!`;
            this.updateScoreBoard();
        } else {
            this.menu.gameMessageText.innerHTML = `It's a draw!`;
            this.board.tiles.forEach((tile) => {
                tile.classList.add("highlight--grey");
            });
        }
        this.menu.gameMessageText.classList.add("bigger");
    }

    setAndRevealScoreBoard() {
        this.menu.scoreBoard.querySelector(
            ".score-board__symbol-one"
        ).innerHTML = this.playerOne.symbol;
        this.menu.scoreBoard.querySelector(
            ".score-board__symbol-two"
        ).innerHTML = this.playerTwo.symbol;
        this.menu.scoreBoard.querySelector(
            ".score-board__name-one"
        ).innerHTML = this.playerOne.name;
        this.menu.scoreBoard.querySelector(
            ".score-board__name-two"
        ).innerHTML = this.playerTwo.name;
        this.menu.scoreBoard.querySelector(
            ".score-board__score-one"
        ).innerHTML = this.playerOne.score;
        this.menu.scoreBoard.querySelector(
            ".score-board__score-two"
        ).innerHTML = this.playerTwo.score;

        document.querySelector(".game-info").classList.add("reveal");
    }

    updateScoreBoard() {
        this.menu.scoreBoard.querySelector(
            ".score-board__score-one"
        ).innerHTML = this.playerOne.score;
        this.menu.scoreBoard.querySelector(
            ".score-board__score-two"
        ).innerHTML = this.playerTwo.score;
    }

    startNewGame() {
        this.menu.scoreBoard.classList.remove("win");
        this.board.resetBoard();
        this.updateCurrentPlayer(true);
        this.menu.gameMessageText.classList.remove("bigger");
    }

    restartToMenu() {
        this.board.hideDOMBoard();
        document.querySelector(".game-info").classList.remove("reveal");
        this.board.resetBoard();
        this.menu.mainMenu.classList.remove("hide");
    }

    CPUTurn() {
        const bestPosition = this.playerTwo.getBestMove(
            this.playerOne.symbol,
            this.board
        );
        console.log(bestPosition);

        this.board.markTile(this.playerTwo.symbol, bestPosition);
        this.board.tiles[bestPosition].classList.remove("unmarked");

        if (this.board.isGameOver()) {
            this.handleGameOver();
        } else {
            this.updateCurrentPlayer();
        }
    }
}

export default GameController;
