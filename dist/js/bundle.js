/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gameController */ "./src/js/components/gameController.js");
// import Game from "./components/game";
 // let game = new Game();

var gameController = new _components_gameController__WEBPACK_IMPORTED_MODULE_0__["default"](); // gameController.board.markTile("X", 0);
// gameController.board.markTile("X", 1);
// gameController.board.markTile("O", 2);
// gameController.board.markTile("X", 3);
// gameController.board.markTile("O", 4);
// gameController.board.markTile("O", 5);
// gameController.board.markTile("X", 6);
// gameController.board.markTile("O", 7);
// gameController.board.markTile("X", 8);
// console.log(gameController.playerOne);
// console.log(gameController.playerTwo);
// console.log(
//     gameController.playerOne.getBestMove(
//         gameController.playerTwo.symbol,
//         gameController.board
//     )
// );

/***/ }),

/***/ "./src/js/components/board.js":
/*!************************************!*\
  !*** ./src/js/components/board.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board = /*#__PURE__*/function () {
  function Board() {
    var tiles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "not copy";

    _classCallCheck(this, Board);

    this.tiles = tiles;
    this.gameContainer = document.querySelector(".game");
    this.winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    this.isCopy = true;

    if (tiles == "not copy") {
      this.DOMBoard = this.createDOMBoard();
      this.isCopy = false;
    }
  } //METHODS


  _createClass(Board, [{
    key: "createDOMBoard",
    value: function createDOMBoard() {
      for (var i = 0; i < 9; i++) {
        var newTile = document.createElement("div");
        newTile.classList.add("tile");
        newTile.classList.add("unmarked");
        newTile.dataset.index = i;
        this.gameContainer.appendChild(newTile);
      }

      this.tiles = _toConsumableArray(document.querySelectorAll(".tile"));
    }
  }, {
    key: "revealDOMBoard",
    value: function revealDOMBoard() {
      this.gameContainer.classList.add("reveal");
    }
  }, {
    key: "hideDOMBoard",
    value: function hideDOMBoard() {
      this.gameContainer.classList.remove("reveal");
    }
  }, {
    key: "markTile",
    value: function markTile(symbol, position) {
      if (this.isCopy) {
        this.tiles[position] = symbol;
      } else {
        if (this.tiles[position].classList.contains("unmarked")) {
          this.tiles[position].innerHTML = symbol;
        }
      }
    }
  }, {
    key: "getAvailableMoves",
    value: function getAvailableMoves() {
      var _this = this;

      var moves = [];
      this.tiles.forEach(function (tile, i) {
        if (_this.isCopy) {
          if (tile === "") moves.push(i);
        } else {
          if (tile.innerHTML === "") moves.push(i);
        }
      });
      return moves;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      if (this.isCopy) {
        return this.tiles.every(function (tile) {
          return tile === "";
        });
      } else {
        return this.tiles.every(function (tile) {
          return tile.innerHTML === "";
        });
      }
    }
  }, {
    key: "isFull",
    value: function isFull() {
      if (this.isCopy) {
        return this.tiles.every(function (tile) {
          return tile !== "";
        });
      } else {
        return this.tiles.every(function (tile) {
          return tile.innerHTML !== "";
        });
      }
    }
  }, {
    key: "isWin",
    value: function isWin() {
      var _this2 = this;

      if (this.isCopy) {
        return this.winningConditions.some(function (condition) {
          var firstSymbol = _this2.tiles[condition[0]];
          var winFound = condition.every(function (i) {
            if (firstSymbol == "") return false;
            return _this2.tiles[i] == firstSymbol;
          });

          if (winFound) {
            _this2.winningCondition = condition;
            _this2.winningSymbol = _this2.tiles[_this2.winningCondition[0]];
          }

          return winFound;
        });
      } else {
        return this.winningConditions.some(function (condition) {
          var firstSymbol = _this2.tiles[condition[0]].innerHTML;
          var winFound = condition.every(function (i) {
            if (firstSymbol == "") return false;
            return _this2.tiles[i].innerHTML == firstSymbol;
          });

          if (winFound) {
            _this2.winningCondition = condition;
            _this2.winningSymbol = _this2.tiles[_this2.winningCondition[0]].innerHTML;
          }

          return winFound;
        });
      }
    }
  }, {
    key: "isGameOver",
    value: function isGameOver() {
      return this.isWin() || this.isFull();
    }
  }, {
    key: "getTiles",
    value: function getTiles() {
      if (this.isCopy) {
        return this.tiles;
      } else {
        return this.tiles.map(function (tile) {
          return tile.innerHTML;
        });
      }
    }
  }, {
    key: "resetBoard",
    value: function resetBoard() {
      this.tiles.forEach(function (tile) {
        tile.classList.add("unmarked");
        tile.classList.remove("highlight");
        tile.classList.remove("highlight--grey");
        tile.innerHTML = "";
      });
    }
  }]);

  return Board;
}();

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/js/components/gameController.js":
/*!*********************************************!*\
  !*** ./src/js/components/gameController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/js/components/board.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/js/components/menu.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/js/components/player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);

    this.winner;
    this.isSinglePlayer;
    this.currentPlayer;
    this.menu = new _menu__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]("X");
    this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_2__["default"]("O");
    this.events();
  }

  _createClass(GameController, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.menu.startBtn.addEventListener("click", this.initializeGame.bind(this));
      this.menu.singlePlayerBtn.addEventListener("click", this.revealForm.bind(this));
      this.menu.twoPlayerBtn.addEventListener("click", this.revealForm.bind(this));
      this.menu.newGameBtn.addEventListener("click", this.startNewGame.bind(this));
      this.menu.newPlayersBtn.addEventListener("click", this.restartToMenu.bind(this));
      this.board.tiles.forEach(function (tile) {
        return tile.addEventListener("click", _this.handlePlayerClick.bind(_this));
      });
    } //METHODS

  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.menu.singlePlayerBtn.classList.add("hide");
      this.menu.twoPlayerBtn.classList.add("hide");
      this.menu.form.classList.add("hide");
      this.menu.startBtn.classList.add("hide");
      var playerOneName = this.menu.playerOneInput.value || "Player One";
      var playerOneSymbol = "X";
      var playerTwoSymbol = "O";
      this.board.revealDOMBoard();
      this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](playerOneName, playerOneSymbol);

      if (this.isSinglePlayer) {
        this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](); // make computer Player
      } else {
        var playerTwoName = this.menu.playerTwoInput.value || "Player Two";
        this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](playerTwoName, playerTwoSymbol);
      }

      this.whoWentFirstLastGame = this.playerTwo;
      this.updateCurrentPlayer(true);
      this.setAndRevealScoreBoard();
    }
  }, {
    key: "revealForm",
    value: function revealForm(e) {
      if (e.currentTarget == this.menu.singlePlayerBtn) {
        this.menu.playerTwoInput.classList.add("hide");
        this.isSinglePlayer = true;
      } else {
        this.menu.playerOneInput.classList.remove("hide");
        this.menu.playerTwoInput.classList.remove("hide");
        this.isSinglePlayer = false;
      }

      this.menu.form.classList.remove("hide");
      this.menu.startBtn.classList.remove("hide");
    }
  }, {
    key: "handlePlayerClick",
    value: function handlePlayerClick(e) {
      if (this.board.isGameOver()) return;
      var tile = e.currentTarget;
      var tileIndex = tile.dataset.index;
      if (!tile.classList.contains("unmarked")) return;
      this.board.markTile(this.currentPlayer.symbol, +tileIndex);
      tile.classList.remove("unmarked");

      if (this.board.isGameOver()) {
        this.handleGameOver();
      } else {
        this.updateCurrentPlayer();
      }
    }
  }, {
    key: "updateCurrentPlayer",
    value: function updateCurrentPlayer() {
      var firstTurn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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

        this.menu.gameMessageText.innerHTML = "".concat(this.currentPlayer.name, " goes first.");
      } else {
        if (this.currentPlayer == this.playerOne) {
          this.currentPlayer = this.playerTwo;
          this.menu.scoreBoard.classList.add("player-two-turn");
        } else {
          this.currentPlayer = this.playerOne;
          this.menu.scoreBoard.classList.remove("player-two-turn");
        }

        this.menu.gameMessageText.innerHTML = "".concat(this.currentPlayer.name, "'s turn.");
      }

      console.log("current player is " + this.currentPlayer.name);
    }
  }, {
    key: "handleGameOver",
    value: function handleGameOver() {
      var _this2 = this;

      if (this.board.isWin()) {
        this.currentPlayer.score++;
        this.menu.scoreBoard.classList.add("win");
        this.board.winningCondition.forEach(function (i) {
          _this2.board.tiles[i].classList.add("highlight");
        });
        this.board.tiles.forEach(function (tile) {
          tile.classList.remove("unmarked");
        });
        this.menu.gameMessageText.innerHTML = "".concat(this.currentPlayer.name, " wins!");
        this.updateScoreBoard();
      } else {
        this.menu.gameMessageText.innerHTML = "It's a draw!";
        this.board.tiles.forEach(function (tile) {
          tile.classList.add("highlight--grey");
        });
      }

      this.menu.gameMessageText.classList.add("bigger");
    }
  }, {
    key: "setAndRevealScoreBoard",
    value: function setAndRevealScoreBoard() {
      this.menu.scoreBoard.querySelector(".score-board__symbol-one").innerHTML = this.playerOne.symbol;
      this.menu.scoreBoard.querySelector(".score-board__symbol-two").innerHTML = this.playerTwo.symbol;
      this.menu.scoreBoard.querySelector(".score-board__name-one").innerHTML = this.playerOne.name;
      this.menu.scoreBoard.querySelector(".score-board__name-two").innerHTML = this.playerTwo.name;
      this.menu.scoreBoard.querySelector(".score-board__score-one").innerHTML = this.playerOne.score;
      this.menu.scoreBoard.querySelector(".score-board__score-two").innerHTML = this.playerTwo.score;
      document.querySelector(".game-info").classList.add("reveal");
    }
  }, {
    key: "updateScoreBoard",
    value: function updateScoreBoard() {
      this.menu.scoreBoard.querySelector(".score-board__score-one").innerHTML = this.playerOne.score;
      this.menu.scoreBoard.querySelector(".score-board__score-two").innerHTML = this.playerTwo.score;
    }
  }, {
    key: "startNewGame",
    value: function startNewGame() {
      this.menu.scoreBoard.classList.remove("win");
      this.board.resetBoard();
      this.updateCurrentPlayer(true);
      this.menu.gameMessageText.classList.remove("bigger");
    }
  }, {
    key: "restartToMenu",
    value: function restartToMenu() {
      this.board.hideDOMBoard();
      document.querySelector(".game-info").classList.remove("reveal");
      this.board.resetBoard();
      this.menu.singlePlayerBtn.classList.remove("hide");
      this.menu.twoPlayerBtn.classList.remove("hide");
    }
  }]);

  return GameController;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameController);

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function Menu() {
  _classCallCheck(this, Menu);

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
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/js/components/player.js":
/*!*************************************!*\
  !*** ./src/js/components/player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/js/components/board.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player = /*#__PURE__*/function () {
  function Player() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "CPU";
    var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "O";
    var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
    var score = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Player);

    this.name = name;
    this.symbol = symbol;
    this.score = score;
    this.maxDepth = maxDepth;
    this.nodesMap = new Map();
  }

  _createClass(Player, [{
    key: "getBestMove",
    value: function getBestMove(opponentSymbol, board) {
      var _this = this;

      var maximizing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
      var depth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      //clear nodesMap if the function is called for a new move
      if (depth == 0) this.nodesMap.clear(); //If the game is over, return the appropiate value

      if (board.isGameOver() || depth === this.maxDepth) {
        if (board.isWin()) {
          if (board.winningSymbol === this.symbol) {
            return 100 - depth;
          } else {
            return -100 + depth;
          }
        } else {
          return 0;
        }
      }

      if (maximizing) {
        //Initialize best to the lowest possible value
        var best = -100; //Loop through all empty cells

        board.getAvailableMoves().forEach(function (i) {
          //Initialize a new board with a copy of our current state
          var child = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](_toConsumableArray(board.getTiles())); //Create a child node by inserting the maximizing symbol x into the current empty cell

          child.markTile(_this.symbol, i); //Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth

          var nodeValue = _this.getBestMove(opponentSymbol, child, false, callback, depth + 1); //Updating best value


          best = Math.max(best, nodeValue); //If it's the main function call, not a recursive one, map each value with it's moves indices

          if (depth == 0) {
            //Comma separated indices if multiple moves have the same value
            var moves = _this.nodesMap.has(nodeValue) ? "".concat(_this.nodesMap.get(nodeValue), ",").concat(i) : i;

            _this.nodesMap.set(nodeValue, moves);
          }
        }); //If it's the main call, return the index of the best move or a random index if multiple indices have the same value

        if (depth == 0) {
          var returnValue;

          if (typeof this.nodesMap.get(best) == "string") {
            var arr = this.nodesMap.get(best).split(",");
            var rand = Math.floor(Math.random() * arr.length);
            returnValue = arr[rand];
          } else {
            returnValue = this.nodesMap.get(best);
          } //run a callback after calculation and return the index


          callback(returnValue);
          return returnValue;
        } //If not main call (recursive) return the value for next calculation


        return best;
      }

      if (!maximizing) {
        //Initialize best to the highest possible value
        var _best = 100; //Loop through all empty cells

        board.getAvailableMoves().forEach(function (i) {
          //Initialize a new board with a copy of our current state
          var child = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](_toConsumableArray(board.getTiles())); //Create a child node by inserting the minimizing symbol o into the current empty cell

          child.markTile(opponentSymbol, i); //Recursively calling getBestMove this time with the new board and maximizing turn and incrementing the depth

          var nodeValue = _this.getBestMove(opponentSymbol, child, true, callback, depth + 1); //Updating best value


          _best = Math.min(_best, nodeValue); //If it's the main function call, not a recursive one, map each value with it's moves indices

          if (depth == 0) {
            //Comma separated indices if multiple moves have the same value
            var moves = _this.nodesMap.has(nodeValue) ? _this.nodesMap.get(nodeValue) + "," + i : i;

            _this.nodesMap.set(nodeValue, moves);
          }
        }); //If it's the main call, return the index of the best move or a random index if multiple indices have the same value

        if (depth == 0) {
          var _returnValue;

          if (typeof this.nodesMap.get(_best) == "string") {
            var _arr = this.nodesMap.get(_best).split(",");

            var _rand = Math.floor(Math.random() * _arr.length);

            _returnValue = _arr[_rand];
          } else {
            _returnValue = this.nodesMap.get(_best);
          } //run a callback after calculation and return the index


          callback(_returnValue);
          return _returnValue;
        } //If not main call (recursive) return the heuristic value for next calculation


        return _best;
      }
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jessezonneveld/Documents/Programming/Projects/05-tic-tac-toe/tic-tac-toe/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3BsYXllci5qcyJdLCJuYW1lcyI6WyJnYW1lQ29udHJvbGxlciIsIkdhbWVDb250cm9sbGVyIiwiQm9hcmQiLCJ0aWxlcyIsImdhbWVDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5uaW5nQ29uZGl0aW9ucyIsImlzQ29weSIsIkRPTUJvYXJkIiwiY3JlYXRlRE9NQm9hcmQiLCJpIiwibmV3VGlsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0IiwiaW5kZXgiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJzeW1ib2wiLCJwb3NpdGlvbiIsImNvbnRhaW5zIiwiaW5uZXJIVE1MIiwibW92ZXMiLCJmb3JFYWNoIiwidGlsZSIsInB1c2giLCJldmVyeSIsInNvbWUiLCJjb25kaXRpb24iLCJmaXJzdFN5bWJvbCIsIndpbkZvdW5kIiwid2lubmluZ0NvbmRpdGlvbiIsIndpbm5pbmdTeW1ib2wiLCJpc1dpbiIsImlzRnVsbCIsIm1hcCIsIndpbm5lciIsImlzU2luZ2xlUGxheWVyIiwiY3VycmVudFBsYXllciIsIm1lbnUiLCJNZW51IiwiYm9hcmQiLCJwbGF5ZXJPbmUiLCJQbGF5ZXIiLCJwbGF5ZXJUd28iLCJldmVudHMiLCJzdGFydEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplR2FtZSIsImJpbmQiLCJzaW5nbGVQbGF5ZXJCdG4iLCJyZXZlYWxGb3JtIiwidHdvUGxheWVyQnRuIiwibmV3R2FtZUJ0biIsInN0YXJ0TmV3R2FtZSIsIm5ld1BsYXllcnNCdG4iLCJyZXN0YXJ0VG9NZW51IiwiaGFuZGxlUGxheWVyQ2xpY2siLCJmb3JtIiwicGxheWVyT25lTmFtZSIsInBsYXllck9uZUlucHV0IiwidmFsdWUiLCJwbGF5ZXJPbmVTeW1ib2wiLCJwbGF5ZXJUd29TeW1ib2wiLCJyZXZlYWxET01Cb2FyZCIsInBsYXllclR3b05hbWUiLCJwbGF5ZXJUd29JbnB1dCIsIndob1dlbnRGaXJzdExhc3RHYW1lIiwidXBkYXRlQ3VycmVudFBsYXllciIsInNldEFuZFJldmVhbFNjb3JlQm9hcmQiLCJlIiwiY3VycmVudFRhcmdldCIsImlzR2FtZU92ZXIiLCJ0aWxlSW5kZXgiLCJtYXJrVGlsZSIsImhhbmRsZUdhbWVPdmVyIiwiZmlyc3RUdXJuIiwic2NvcmVCb2FyZCIsImdhbWVNZXNzYWdlVGV4dCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2NvcmUiLCJ1cGRhdGVTY29yZUJvYXJkIiwicmVzZXRCb2FyZCIsImhpZGVET01Cb2FyZCIsIm1heERlcHRoIiwibm9kZXNNYXAiLCJNYXAiLCJvcHBvbmVudFN5bWJvbCIsIm1heGltaXppbmciLCJjYWxsYmFjayIsImRlcHRoIiwiY2xlYXIiLCJiZXN0IiwiZ2V0QXZhaWxhYmxlTW92ZXMiLCJjaGlsZCIsImdldFRpbGVzIiwibm9kZVZhbHVlIiwiZ2V0QmVzdE1vdmUiLCJNYXRoIiwibWF4IiwiaGFzIiwiZ2V0Iiwic2V0IiwicmV0dXJuVmFsdWUiLCJhcnIiLCJzcGxpdCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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IFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gaW1wb3J0IEdhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lXCI7XG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVDb250cm9sbGVyXCI7XG5cbi8vIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XG5cbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiWFwiLCAwKTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiWFwiLCAxKTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiT1wiLCAyKTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiWFwiLCAzKTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiT1wiLCA0KTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiT1wiLCA1KTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiWFwiLCA2KTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiT1wiLCA3KTtcbi8vIGdhbWVDb250cm9sbGVyLmJvYXJkLm1hcmtUaWxlKFwiWFwiLCA4KTtcblxuLy8gY29uc29sZS5sb2coZ2FtZUNvbnRyb2xsZXIucGxheWVyT25lKTtcbi8vIGNvbnNvbGUubG9nKGdhbWVDb250cm9sbGVyLnBsYXllclR3byk7XG5cbi8vIGNvbnNvbGUubG9nKFxuLy8gICAgIGdhbWVDb250cm9sbGVyLnBsYXllck9uZS5nZXRCZXN0TW92ZShcbi8vICAgICAgICAgZ2FtZUNvbnRyb2xsZXIucGxheWVyVHdvLnN5bWJvbCxcbi8vICAgICAgICAgZ2FtZUNvbnRyb2xsZXIuYm9hcmRcbi8vICAgICApXG4vLyApO1xuIiwiY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHRpbGVzID0gXCJub3QgY29weVwiKSB7XG4gICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lXCIpO1xuICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25zID0gW1xuICAgICAgICAgICAgWzAsIDEsIDJdLFxuICAgICAgICAgICAgWzMsIDQsIDVdLFxuICAgICAgICAgICAgWzYsIDcsIDhdLFxuICAgICAgICAgICAgWzAsIDMsIDZdLFxuICAgICAgICAgICAgWzEsIDQsIDddLFxuICAgICAgICAgICAgWzIsIDUsIDhdLFxuICAgICAgICAgICAgWzAsIDQsIDhdLFxuICAgICAgICAgICAgWzIsIDQsIDZdLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmlzQ29weSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRpbGVzID09IFwibm90IGNvcHlcIikge1xuICAgICAgICAgICAgdGhpcy5ET01Cb2FyZCA9IHRoaXMuY3JlYXRlRE9NQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb3B5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01FVEhPRFNcbiAgICBjcmVhdGVET01Cb2FyZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3VGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgICAgICAgIG5ld1RpbGUuY2xhc3NMaXN0LmFkZChcInVubWFya2VkXCIpO1xuICAgICAgICAgICAgbmV3VGlsZS5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGlsZVwiKV07XG4gICAgfVxuXG4gICAgcmV2ZWFsRE9NQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xuICAgIH1cblxuICAgIGhpZGVET01Cb2FyZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyZXZlYWxcIik7XG4gICAgfVxuXG4gICAgbWFya1RpbGUoc3ltYm9sLCBwb3NpdGlvbikge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZXNbcG9zaXRpb25dID0gc3ltYm9sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbcG9zaXRpb25dLmNsYXNzTGlzdC5jb250YWlucyhcInVubWFya2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1twb3NpdGlvbl0uaW5uZXJIVE1MID0gc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXZhaWxhYmxlTW92ZXMoKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW107XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCgodGlsZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3B5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUgPT09IFwiXCIpIG1vdmVzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLmlubmVySFRNTCA9PT0gXCJcIikgbW92ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzLmV2ZXJ5KCh0aWxlKSA9PiB0aWxlID09PSBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzLmV2ZXJ5KCh0aWxlKSA9PiB0aWxlLmlubmVySFRNTCA9PT0gXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0Z1bGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29weSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXMuZXZlcnkoKHRpbGUpID0+IHRpbGUgIT09IFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXMuZXZlcnkoKHRpbGUpID0+IHRpbGUuaW5uZXJIVE1MICE9PSBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzV2luKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpbm5pbmdDb25kaXRpb25zLnNvbWUoKGNvbmRpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0U3ltYm9sID0gdGhpcy50aWxlc1tjb25kaXRpb25bMF1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkZvdW5kID0gY29uZGl0aW9uLmV2ZXJ5KChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFN5bWJvbCA9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2ldID09IGZpcnN0U3ltYm9sO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbkZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uaW5nU3ltYm9sID0gdGhpcy50aWxlc1t0aGlzLndpbm5pbmdDb25kaXRpb25bMF1dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5Gb3VuZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lubmluZ0NvbmRpdGlvbnMuc29tZSgoY29uZGl0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RTeW1ib2wgPSB0aGlzLnRpbGVzW2NvbmRpdGlvblswXV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkZvdW5kID0gY29uZGl0aW9uLmV2ZXJ5KChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFN5bWJvbCA9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2ldLmlubmVySFRNTCA9PSBmaXJzdFN5bWJvbDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5Gb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmluZ1N5bWJvbCA9IHRoaXMudGlsZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25bMF1cbiAgICAgICAgICAgICAgICAgICAgXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbkZvdW5kO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1dpbigpIHx8IHRoaXMuaXNGdWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0VGlsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29weSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlcy5tYXAoKHRpbGUpID0+IHRpbGUuaW5uZXJIVE1MKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidW5tYXJrZWRcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHQtLWdyZXlcIik7XG4gICAgICAgICAgICB0aWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aW5uZXI7XG4gICAgICAgIHRoaXMuaXNTaW5nbGVQbGF5ZXI7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllcjtcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXIoXCJYXCIpO1xuICAgICAgICB0aGlzLnBsYXllclR3byA9IG5ldyBQbGF5ZXIoXCJPXCIpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuICAgIGV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5tZW51LnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVHYW1lLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZW51LnNpbmdsZVBsYXllckJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5yZXZlYWxGb3JtLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZW51LnR3b1BsYXllckJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5yZXZlYWxGb3JtLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZW51Lm5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMuc3RhcnROZXdHYW1lLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZW51Lm5ld1BsYXllcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFRvTWVudS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYm9hcmQudGlsZXMuZm9yRWFjaCgodGlsZSkgPT5cbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUGxheWVyQ2xpY2suYmluZCh0aGlzKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL01FVEhPRFNcbiAgICBpbml0aWFsaXplR2FtZSgpIHtcbiAgICAgICAgdGhpcy5tZW51LnNpbmdsZVBsYXllckJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGhpcy5tZW51LnR3b1BsYXllckJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgdGhpcy5tZW51LmZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRoaXMubWVudS5zdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyT25lTmFtZSA9IHRoaXMubWVudS5wbGF5ZXJPbmVJbnB1dC52YWx1ZSB8fCBcIlBsYXllciBPbmVcIjtcbiAgICAgICAgY29uc3QgcGxheWVyT25lU3ltYm9sID0gXCJYXCI7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b1N5bWJvbCA9IFwiT1wiO1xuXG4gICAgICAgIHRoaXMuYm9hcmQucmV2ZWFsRE9NQm9hcmQoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKHBsYXllck9uZU5hbWUsIHBsYXllck9uZVN5bWJvbCk7XG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xlUGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclR3byA9IG5ldyBQbGF5ZXIoKTsgLy8gbWFrZSBjb21wdXRlciBQbGF5ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b05hbWUgPVxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5wbGF5ZXJUd29JbnB1dC52YWx1ZSB8fCBcIlBsYXllciBUd29cIjtcbiAgICAgICAgICAgIHRoaXMucGxheWVyVHdvID0gbmV3IFBsYXllcihwbGF5ZXJUd29OYW1lLCBwbGF5ZXJUd29TeW1ib2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aG9XZW50Rmlyc3RMYXN0R2FtZSA9IHRoaXMucGxheWVyVHdvO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQbGF5ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0QW5kUmV2ZWFsU2NvcmVCb2FyZCgpO1xuICAgIH1cblxuICAgIHJldmVhbEZvcm0oZSkge1xuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09IHRoaXMubWVudS5zaW5nbGVQbGF5ZXJCdG4pIHtcbiAgICAgICAgICAgIHRoaXMubWVudS5wbGF5ZXJUd29JbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNTaW5nbGVQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZW51LnBsYXllck9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgdGhpcy5tZW51LnBsYXllclR3b0lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgdGhpcy5pc1NpbmdsZVBsYXllciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVudS5mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB0aGlzLm1lbnUuc3RhcnRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0dhbWVPdmVyKCkpIHJldHVybjtcbiAgICAgICAgY29uc3QgdGlsZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgdGlsZUluZGV4ID0gdGlsZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBpZiAoIXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5tYXJrZWRcIikpIHJldHVybjtcbiAgICAgICAgdGhpcy5ib2FyZC5tYXJrVGlsZSh0aGlzLmN1cnJlbnRQbGF5ZXIuc3ltYm9sLCArdGlsZUluZGV4KTtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwidW5tYXJrZWRcIik7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50UGxheWVyKGZpcnN0VHVybiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXJzdFR1cm4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID09IHRoaXMucGxheWVyT25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJUd287XG4gICAgICAgICAgICAgICAgdGhpcy53aG9XZW50Rmlyc3RMYXN0R2FtZSA9IHRoaXMucGxheWVyVHdvO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItdHdvLXR1cm5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyT25lO1xuICAgICAgICAgICAgICAgIHRoaXMud2hvV2VudEZpcnN0TGFzdEdhbWUgPSB0aGlzLnBsYXllck9uZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWVyLXR3by10dXJuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZW51LmdhbWVNZXNzYWdlVGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZX0gZ29lcyBmaXJzdC5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PSB0aGlzLnBsYXllck9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyVHdvO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItdHdvLXR1cm5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyT25lO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5ZXItdHdvLXR1cm5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1lbnUuZ2FtZU1lc3NhZ2VUZXh0LmlubmVySFRNTCA9IGAke3RoaXMuY3VycmVudFBsYXllci5uYW1lfSdzIHR1cm4uYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgcGxheWVyIGlzIFwiICsgdGhpcy5jdXJyZW50UGxheWVyLm5hbWUpO1xuICAgIH1cblxuICAgIGhhbmRsZUdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZC5pc1dpbigpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc2NvcmUrKztcbiAgICAgICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJ3aW5cIik7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLndpbm5pbmdDb25kaXRpb24uZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQudGlsZXNbaV0uY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC50aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwidW5tYXJrZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubWVudS5nYW1lTWVzc2FnZVRleHQuaW5uZXJIVE1MID0gYCR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9IHdpbnMhYDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmVCb2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZW51LmdhbWVNZXNzYWdlVGV4dC5pbm5lckhUTUwgPSBgSXQncyBhIGRyYXchYDtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQudGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodC0tZ3JleVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVudS5nYW1lTWVzc2FnZVRleHQuY2xhc3NMaXN0LmFkZChcImJpZ2dlclwiKTtcbiAgICB9XG5cbiAgICBzZXRBbmRSZXZlYWxTY29yZUJvYXJkKCkge1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3N5bWJvbC1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLnN5bWJvbDtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zeW1ib2wtdHdvXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllclR3by5zeW1ib2w7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fbmFtZS1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLm5hbWU7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fbmFtZS10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLm5hbWU7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc2NvcmUtb25lXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllck9uZS5zY29yZTtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLnNjb3JlO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1pbmZvXCIpLmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NvcmVCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLnNjb3JlO1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3Njb3JlLXR3b1wiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJUd28uc2NvcmU7XG4gICAgfVxuXG4gICAgc3RhcnROZXdHYW1lKCkge1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwid2luXCIpO1xuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKHRydWUpO1xuICAgICAgICB0aGlzLm1lbnUuZ2FtZU1lc3NhZ2VUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJiaWdnZXJcIik7XG4gICAgfVxuXG4gICAgcmVzdGFydFRvTWVudSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5oaWRlRE9NQm9hcmQoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWluZm9cIikuY2xhc3NMaXN0LnJlbW92ZShcInJldmVhbFwiKTtcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIHRoaXMubWVudS5zaW5nbGVQbGF5ZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIHRoaXMubWVudS50d29QbGF5ZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc3RhcnRcIik7XG4gICAgICAgIHRoaXMubmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW5ldy1nYW1lXCIpO1xuICAgICAgICB0aGlzLm5ld1BsYXllcnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1uZXctcGxheWVyc1wiKTtcbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zaW5nbGUtcGxheWVyXCIpO1xuICAgICAgICB0aGlzLnR3b1BsYXllckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXR3by1wbGF5ZXJcIik7XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmVJbnB1dCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vbmVcIik7XG4gICAgICAgIHRoaXMucGxheWVyVHdvSW5wdXQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvXCIpO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLWJvYXJkXCIpO1xuICAgICAgICB0aGlzLmdhbWVNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1tZXNzYWdlLXRleHRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiQ1BVXCIsIHN5bWJvbCA9IFwiT1wiLCBtYXhEZXB0aCA9IC0xLCBzY29yZSA9IDApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5tYXhEZXB0aCA9IG1heERlcHRoO1xuICAgICAgICB0aGlzLm5vZGVzTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGdldEJlc3RNb3ZlKFxuICAgICAgICBvcHBvbmVudFN5bWJvbCxcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIG1heGltaXppbmcgPSB0cnVlLFxuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHt9LFxuICAgICAgICBkZXB0aCA9IDBcbiAgICApIHtcbiAgICAgICAgLy9jbGVhciBub2Rlc01hcCBpZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciBhIG5ldyBtb3ZlXG4gICAgICAgIGlmIChkZXB0aCA9PSAwKSB0aGlzLm5vZGVzTWFwLmNsZWFyKCk7XG5cbiAgICAgICAgLy9JZiB0aGUgZ2FtZSBpcyBvdmVyLCByZXR1cm4gdGhlIGFwcHJvcGlhdGUgdmFsdWVcbiAgICAgICAgaWYgKGJvYXJkLmlzR2FtZU92ZXIoKSB8fCBkZXB0aCA9PT0gdGhpcy5tYXhEZXB0aCkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmlzV2luKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQud2lubmluZ1N5bWJvbCA9PT0gdGhpcy5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEwMCAtIGRlcHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTAwICsgZGVwdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhpbWl6aW5nKSB7XG4gICAgICAgICAgICAvL0luaXRpYWxpemUgYmVzdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlXG4gICAgICAgICAgICBsZXQgYmVzdCA9IC0xMDA7XG4gICAgICAgICAgICAvL0xvb3AgdGhyb3VnaCBhbGwgZW1wdHkgY2VsbHNcbiAgICAgICAgICAgIGJvYXJkLmdldEF2YWlsYWJsZU1vdmVzKCkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vSW5pdGlhbGl6ZSBhIG5ldyBib2FyZCB3aXRoIGEgY29weSBvZiBvdXIgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbmV3IEJvYXJkKFsuLi5ib2FyZC5nZXRUaWxlcygpXSk7XG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBjaGlsZCBub2RlIGJ5IGluc2VydGluZyB0aGUgbWF4aW1pemluZyBzeW1ib2wgeCBpbnRvIHRoZSBjdXJyZW50IGVtcHR5IGNlbGxcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXJrVGlsZSh0aGlzLnN5bWJvbCwgaSk7XG4gICAgICAgICAgICAgICAgLy9SZWN1cnNpdmVseSBjYWxsaW5nIGdldEJlc3RNb3ZlIHRoaXMgdGltZSB3aXRoIHRoZSBuZXcgYm9hcmQgYW5kIG1pbmltaXppbmcgdHVybiBhbmQgaW5jcmVtZW50aW5nIHRoZSBkZXB0aFxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZ2V0QmVzdE1vdmUoXG4gICAgICAgICAgICAgICAgICAgIG9wcG9uZW50U3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICBkZXB0aCArIDFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vVXBkYXRpbmcgYmVzdCB2YWx1ZVxuICAgICAgICAgICAgICAgIGJlc3QgPSBNYXRoLm1heChiZXN0LCBub2RlVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgLy9JZiBpdCdzIHRoZSBtYWluIGZ1bmN0aW9uIGNhbGwsIG5vdCBhIHJlY3Vyc2l2ZSBvbmUsIG1hcCBlYWNoIHZhbHVlIHdpdGggaXQncyBtb3ZlcyBpbmRpY2VzXG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tYSBzZXBhcmF0ZWQgaW5kaWNlcyBpZiBtdWx0aXBsZSBtb3ZlcyBoYXZlIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5ub2Rlc01hcC5oYXMobm9kZVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHt0aGlzLm5vZGVzTWFwLmdldChub2RlVmFsdWUpfSwke2l9YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzTWFwLnNldChub2RlVmFsdWUsIG1vdmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vSWYgaXQncyB0aGUgbWFpbiBjYWxsLCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBiZXN0IG1vdmUgb3IgYSByYW5kb20gaW5kZXggaWYgbXVsdGlwbGUgaW5kaWNlcyBoYXZlIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICBpZiAoZGVwdGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubm9kZXNNYXAuZ2V0KGJlc3QpID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gdGhpcy5ub2Rlc01hcC5nZXQoYmVzdCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gYXJyW3JhbmRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5ub2Rlc01hcC5nZXQoYmVzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vcnVuIGEgY2FsbGJhY2sgYWZ0ZXIgY2FsY3VsYXRpb24gYW5kIHJldHVybiB0aGUgaW5kZXhcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9JZiBub3QgbWFpbiBjYWxsIChyZWN1cnNpdmUpIHJldHVybiB0aGUgdmFsdWUgZm9yIG5leHQgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIHJldHVybiBiZXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtYXhpbWl6aW5nKSB7XG4gICAgICAgICAgICAvL0luaXRpYWxpemUgYmVzdCB0byB0aGUgaGlnaGVzdCBwb3NzaWJsZSB2YWx1ZVxuICAgICAgICAgICAgbGV0IGJlc3QgPSAxMDA7XG4gICAgICAgICAgICAvL0xvb3AgdGhyb3VnaCBhbGwgZW1wdHkgY2VsbHNcbiAgICAgICAgICAgIGJvYXJkLmdldEF2YWlsYWJsZU1vdmVzKCkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vSW5pdGlhbGl6ZSBhIG5ldyBib2FyZCB3aXRoIGEgY29weSBvZiBvdXIgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbmV3IEJvYXJkKFsuLi5ib2FyZC5nZXRUaWxlcygpXSk7XG5cbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBhIGNoaWxkIG5vZGUgYnkgaW5zZXJ0aW5nIHRoZSBtaW5pbWl6aW5nIHN5bWJvbCBvIGludG8gdGhlIGN1cnJlbnQgZW1wdHkgY2VsbFxuICAgICAgICAgICAgICAgIGNoaWxkLm1hcmtUaWxlKG9wcG9uZW50U3ltYm9sLCBpKTtcblxuICAgICAgICAgICAgICAgIC8vUmVjdXJzaXZlbHkgY2FsbGluZyBnZXRCZXN0TW92ZSB0aGlzIHRpbWUgd2l0aCB0aGUgbmV3IGJvYXJkIGFuZCBtYXhpbWl6aW5nIHR1cm4gYW5kIGluY3JlbWVudGluZyB0aGUgZGVwdGhcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmdldEJlc3RNb3ZlKFxuICAgICAgICAgICAgICAgICAgICBvcHBvbmVudFN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICBkZXB0aCArIDFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vVXBkYXRpbmcgYmVzdCB2YWx1ZVxuICAgICAgICAgICAgICAgIGJlc3QgPSBNYXRoLm1pbihiZXN0LCBub2RlVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgLy9JZiBpdCdzIHRoZSBtYWluIGZ1bmN0aW9uIGNhbGwsIG5vdCBhIHJlY3Vyc2l2ZSBvbmUsIG1hcCBlYWNoIHZhbHVlIHdpdGggaXQncyBtb3ZlcyBpbmRpY2VzXG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tYSBzZXBhcmF0ZWQgaW5kaWNlcyBpZiBtdWx0aXBsZSBtb3ZlcyBoYXZlIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5ub2Rlc01hcC5oYXMobm9kZVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm5vZGVzTWFwLmdldChub2RlVmFsdWUpICsgXCIsXCIgKyBpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXNNYXAuc2V0KG5vZGVWYWx1ZSwgbW92ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9JZiBpdCdzIHRoZSBtYWluIGNhbGwsIHJldHVybiB0aGUgaW5kZXggb2YgdGhlIGJlc3QgbW92ZSBvciBhIHJhbmRvbSBpbmRleCBpZiBtdWx0aXBsZSBpbmRpY2VzIGhhdmUgdGhlIHNhbWUgdmFsdWVcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5ub2Rlc01hcC5nZXQoYmVzdCkgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLm5vZGVzTWFwLmdldChiZXN0KS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhcnJbcmFuZF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLm5vZGVzTWFwLmdldChiZXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9ydW4gYSBjYWxsYmFjayBhZnRlciBjYWxjdWxhdGlvbiBhbmQgcmV0dXJuIHRoZSBpbmRleFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0lmIG5vdCBtYWluIGNhbGwgKHJlY3Vyc2l2ZSkgcmV0dXJuIHRoZSBoZXVyaXN0aWMgdmFsdWUgZm9yIG5leHQgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIHJldHVybiBiZXN0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9