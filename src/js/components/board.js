class Board {
    constructor(tiles = "not copy") {
        this.tiles = tiles;
        this.gameContainer = document.querySelector(".game");
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
        this.isCopy = true;

        if (tiles == "not copy") {
            this.DOMBoard = this.createDOMBoard();
            this.isCopy = false;
        }
    }

    //METHODS
    createDOMBoard() {
        for (let i = 0; i < 9; i++) {
            const newTile = document.createElement("div");
            newTile.classList.add("tile");
            newTile.classList.add("unmarked");
            newTile.dataset.index = i;
            this.gameContainer.appendChild(newTile);
        }
        this.tiles = [...document.querySelectorAll(".tile")];
    }

    revealDOMBoard() {
        this.gameContainer.classList.add("reveal");
    }

    hideDOMBoard() {
        this.gameContainer.classList.remove("reveal");
    }

    markTile(symbol, position) {
        if (this.isCopy) {
            this.tiles[position] = symbol;
        } else {
            if (this.tiles[position].classList.contains("unmarked")) {
                this.tiles[position].innerHTML = symbol;
            }
        }
    }

    getAvailableMoves() {
        const moves = [];
        this.tiles.forEach((tile, i) => {
            if (this.isCopy) {
                if (tile === "") moves.push(i);
            } else {
                if (tile.innerHTML === "") moves.push(i);
            }
        });
        return moves;
    }

    isEmpty() {
        if (this.isCopy) {
            return this.tiles.every((tile) => tile === "");
        } else {
            return this.tiles.every((tile) => tile.innerHTML === "");
        }
    }

    isFull() {
        if (this.isCopy) {
            return this.tiles.every((tile) => tile !== "");
        } else {
            return this.tiles.every((tile) => tile.innerHTML !== "");
        }
    }

    isWin() {
        if (this.isCopy) {
            return this.winningConditions.some((condition) => {
                const firstSymbol = this.tiles[condition[0]];
                const winFound = condition.every((i) => {
                    if (firstSymbol == "") return false;
                    return this.tiles[i] == firstSymbol;
                });

                if (winFound) {
                    this.winningCondition = condition;
                    this.winningSymbol = this.tiles[this.winningCondition[0]];
                }

                return winFound;
            });
        } else {
            return this.winningConditions.some((condition) => {
                const firstSymbol = this.tiles[condition[0]].innerHTML;
                const winFound = condition.every((i) => {
                    if (firstSymbol == "") return false;
                    return this.tiles[i].innerHTML == firstSymbol;
                });

                if (winFound) {
                    this.winningCondition = condition;
                    this.winningSymbol = this.tiles[
                        this.winningCondition[0]
                    ].innerHTML;
                }

                return winFound;
            });
        }
    }

    isGameOver() {
        return this.isWin() || this.isFull();
    }

    getTiles() {
        if (this.isCopy) {
            return this.tiles;
        } else {
            return this.tiles.map((tile) => tile.innerHTML);
        }
    }

    resetBoard() {
        this.tiles.forEach((tile) => {
            tile.classList.add("unmarked");
            tile.classList.remove("highlight");
            tile.classList.remove("highlight--grey");
            tile.innerHTML = "";
        });
    }
}

export default Board;
