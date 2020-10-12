import Board from "./board";
import Menu from "./menu";
import Player from "./player";
import CPU from "./CPU";

class GameController {
    constructor() {
        this.winner;
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
    }

    //METHODS
    initializeGame() {
        this.menu.mainMenu.classList.add("hide");
        const playerInfo = this.menu.getPlayerInfo();

        this.board.revealDOMBoard();
        this.playerOne = new Player(
            playerInfo.playerOneInfo.name,
            playerInfo.playerOneInfo.symbol
        );
        if (this.menu.isSinglePlayer) {
            this.playerTwo = new CPU("CPU", "O", this.menu.difficulty); // make computer Player
        } else {
            this.playerTwo = new Player(
                playerInfo.playerTwoInfo.name,
                playerInfo.playerTwoInfo.symbol
            );
        }

        this.whoWentFirstLastGame = this.playerTwo;
        this.updateCurrentPlayer(true);
        this.setAndRevealScoreBoard();
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
            this.TogglePlayerAbility();
            setTimeout(this.CPUTurn.bind(this), 2000);
        }
    }

    TogglePlayerAbility() {
        this.board.gameContainer.classList.toggle("click-shield");
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

        this.board.markTile(this.playerTwo.symbol, bestPosition);
        this.board.tiles[bestPosition].classList.remove("unmarked");

        if (this.board.isGameOver()) {
            this.handleGameOver();
        } else {
            this.updateCurrentPlayer();
        }

        this.TogglePlayerAbility();
    }
}

export default GameController;
