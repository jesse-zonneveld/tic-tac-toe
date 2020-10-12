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

var gameController = new _components_gameController__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/js/components/CPU.js":
/*!**********************************!*\
  !*** ./src/js/components/CPU.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/js/components/player.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/js/components/board.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CPU = /*#__PURE__*/function (_Player) {
  _inherits(CPU, _Player);

  var _super = _createSuper(CPU);

  function CPU(name, symbol) {
    var _this;

    var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    _classCallCheck(this, CPU);

    _this = _super.call(this, name, symbol);
    _this.maxDepth = maxDepth;
    _this.nodesMap = new Map();
    return _this;
  }

  _createClass(CPU, [{
    key: "getBestMove",
    value: function getBestMove(opponentSymbol, board) {
      var _this2 = this;

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
          var child = new _board__WEBPACK_IMPORTED_MODULE_1__["default"](_toConsumableArray(board.getTiles())); //Create a child node by inserting the maximizing symbol x into the current empty cell

          child.markTile(_this2.symbol, i); //Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth

          var nodeValue = _this2.getBestMove(opponentSymbol, child, false, callback, depth + 1); //Updating best value


          best = Math.max(best, nodeValue); //If it's the main function call, not a recursive one, map each value with it's moves indices

          if (depth == 0) {
            //Comma separated indices if multiple moves have the same value
            var moves = _this2.nodesMap.has(nodeValue) ? "".concat(_this2.nodesMap.get(nodeValue), ",").concat(i) : i;

            _this2.nodesMap.set(nodeValue, moves);
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
          var child = new _board__WEBPACK_IMPORTED_MODULE_1__["default"](_toConsumableArray(board.getTiles())); //Create a child node by inserting the minimizing symbol o into the current empty cell

          child.markTile(opponentSymbol, i); //Recursively calling getBestMove this time with the new board and maximizing turn and incrementing the depth

          var nodeValue = _this2.getBestMove(opponentSymbol, child, true, callback, depth + 1); //Updating best value


          _best = Math.min(_best, nodeValue); //If it's the main function call, not a recursive one, map each value with it's moves indices

          if (depth == 0) {
            //Comma separated indices if multiple moves have the same value
            var moves = _this2.nodesMap.has(nodeValue) ? _this2.nodesMap.get(nodeValue) + "," + i : i;

            _this2.nodesMap.set(nodeValue, moves);
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

  return CPU;
}(_player__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CPU);

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
/* harmony import */ var _CPU__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CPU */ "./src/js/components/CPU.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);

    this.winner;
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
      this.menu.newGameBtn.addEventListener("click", this.startNewGame.bind(this));
      this.menu.newPlayersBtn.addEventListener("click", this.restartToMenu.bind(this));
      this.board.tiles.forEach(function (tile) {
        return tile.addEventListener("click", _this.handlePlayerClick.bind(_this));
      });
    } //METHODS

  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.menu.mainMenu.classList.add("hide");
      var playerInfo = this.menu.getPlayerInfo();
      this.board.revealDOMBoard();
      this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](playerInfo.playerOneInfo.name, playerInfo.playerOneInfo.symbol);

      if (this.menu.isSinglePlayer) {
        this.playerTwo = new _CPU__WEBPACK_IMPORTED_MODULE_3__["default"]("CPU", "O", this.menu.difficulty); // make computer Player
      } else {
        this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](playerInfo.playerTwoInfo.name, playerInfo.playerTwoInfo.symbol);
      }

      this.whoWentFirstLastGame = this.playerTwo;
      this.updateCurrentPlayer(true);
      this.setAndRevealScoreBoard();
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

      if (this.currentPlayer.name == "CPU") {
        this.TogglePlayerAbility();
        setTimeout(this.CPUTurn.bind(this), 2000);
      }
    }
  }, {
    key: "TogglePlayerAbility",
    value: function TogglePlayerAbility() {
      this.board.gameContainer.classList.toggle("click-shield");
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
      this.menu.mainMenu.classList.remove("hide");
    }
  }, {
    key: "CPUTurn",
    value: function CPUTurn() {
      var bestPosition = this.playerTwo.getBestMove(this.playerOne.symbol, this.board);
      this.board.markTile(this.playerTwo.symbol, bestPosition);
      this.board.tiles[bestPosition].classList.remove("unmarked");

      if (this.board.isGameOver()) {
        this.handleGameOver();
      } else {
        this.updateCurrentPlayer();
      }

      this.TogglePlayerAbility();
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.isSinglePlayer = true;
    this.difficulty = 1;
    this.mainMenu = document.querySelector(".main-menu");
    this.startBtn = this.mainMenu.querySelector(".btn-start");
    this.newGameBtn = document.querySelector(".btn-new-game");
    this.newPlayersBtn = document.querySelector(".btn-new-players");
    this.toggleBtn = this.mainMenu.querySelector(".toggle-btn");
    this.singlePlayerBtn = this.toggleBtn.querySelector(".btn-single-player");
    this.twoPlayerBtn = this.toggleBtn.querySelector(".btn-two-player");
    this.form = this.mainMenu.querySelector(".inputs-container");
    this.playerOneForm = this.form.querySelector(".player-one-form");
    this.playerOneFormName = this.form.querySelector(".player-one-name");
    this.playerOneFormSymbol = this.form.querySelector(".player-one-symbol");
    this.playerTwoForm = this.form.querySelector(".player-two-form");
    this.playerTwoFormName = this.form.querySelector(".player-two-name");
    this.playerTwoFormSymbol = this.form.querySelector(".player-two-symbol");
    this.scoreBoard = document.querySelector(".score-board");
    this.gameMessageText = document.querySelector(".game-message-text");
    this.difficultyBtn = this.mainMenu.querySelector(".three-way-btn");
    this.easyBtn = this.difficultyBtn.querySelector(".btn-easy");
    this.mediumBtn = this.difficultyBtn.querySelector(".btn-medium");
    this.hardBtn = this.difficultyBtn.querySelector(".btn-hard");
    this.events();
  }

  _createClass(Menu, [{
    key: "events",
    value: function events() {
      this.singlePlayerBtn.addEventListener("click", this.revealForm.bind(this));
      this.twoPlayerBtn.addEventListener("click", this.revealForm.bind(this));
      this.easyBtn.addEventListener("click", this.setDifficulty.bind(this));
      this.mediumBtn.addEventListener("click", this.setDifficulty.bind(this));
      this.hardBtn.addEventListener("click", this.setDifficulty.bind(this));
    }
  }, {
    key: "revealForm",
    value: function revealForm(e) {
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
  }, {
    key: "setDifficulty",
    value: function setDifficulty(e) {
      var btn = e.currentTarget;

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
  }, {
    key: "getPlayerInfo",
    value: function getPlayerInfo() {
      var playerOneInfo = {
        name: this.playerOneFormName.value || "Player One",
        symbol: this.playerOneFormSymbol.value || "X"
      };
      var playerTwoInfo = {
        name: this.playerTwoFormName.value || "Player Two",
        symbol: this.playerTwoFormSymbol.value || "O"
      };
      return {
        playerOneInfo: playerOneInfo,
        playerTwoInfo: playerTwoInfo
      };
    }
  }]);

  return Menu;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Player = function Player() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "CPU";
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "O";

  _classCallCheck(this, Player);

  this.name = name;
  this.symbol = symbol;
  this.score = 0;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DUFUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiZ2FtZUNvbnRyb2xsZXIiLCJHYW1lQ29udHJvbGxlciIsIkNQVSIsIm5hbWUiLCJzeW1ib2wiLCJtYXhEZXB0aCIsIm5vZGVzTWFwIiwiTWFwIiwib3Bwb25lbnRTeW1ib2wiLCJib2FyZCIsIm1heGltaXppbmciLCJjYWxsYmFjayIsImRlcHRoIiwiY2xlYXIiLCJpc0dhbWVPdmVyIiwiaXNXaW4iLCJ3aW5uaW5nU3ltYm9sIiwiYmVzdCIsImdldEF2YWlsYWJsZU1vdmVzIiwiZm9yRWFjaCIsImkiLCJjaGlsZCIsIkJvYXJkIiwiZ2V0VGlsZXMiLCJtYXJrVGlsZSIsIm5vZGVWYWx1ZSIsImdldEJlc3RNb3ZlIiwiTWF0aCIsIm1heCIsIm1vdmVzIiwiaGFzIiwiZ2V0Iiwic2V0IiwicmV0dXJuVmFsdWUiLCJhcnIiLCJzcGxpdCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm1pbiIsIlBsYXllciIsInRpbGVzIiwiZ2FtZUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbm5pbmdDb25kaXRpb25zIiwiaXNDb3B5IiwiRE9NQm9hcmQiLCJjcmVhdGVET01Cb2FyZCIsIm5ld1RpbGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImluZGV4IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwicG9zaXRpb24iLCJjb250YWlucyIsImlubmVySFRNTCIsInRpbGUiLCJwdXNoIiwiZXZlcnkiLCJzb21lIiwiY29uZGl0aW9uIiwiZmlyc3RTeW1ib2wiLCJ3aW5Gb3VuZCIsIndpbm5pbmdDb25kaXRpb24iLCJpc0Z1bGwiLCJtYXAiLCJ3aW5uZXIiLCJjdXJyZW50UGxheWVyIiwibWVudSIsIk1lbnUiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJldmVudHMiLCJzdGFydEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplR2FtZSIsImJpbmQiLCJuZXdHYW1lQnRuIiwic3RhcnROZXdHYW1lIiwibmV3UGxheWVyc0J0biIsInJlc3RhcnRUb01lbnUiLCJoYW5kbGVQbGF5ZXJDbGljayIsIm1haW5NZW51IiwicGxheWVySW5mbyIsImdldFBsYXllckluZm8iLCJyZXZlYWxET01Cb2FyZCIsInBsYXllck9uZUluZm8iLCJpc1NpbmdsZVBsYXllciIsImRpZmZpY3VsdHkiLCJwbGF5ZXJUd29JbmZvIiwid2hvV2VudEZpcnN0TGFzdEdhbWUiLCJ1cGRhdGVDdXJyZW50UGxheWVyIiwic2V0QW5kUmV2ZWFsU2NvcmVCb2FyZCIsImUiLCJjdXJyZW50VGFyZ2V0IiwidGlsZUluZGV4IiwiaGFuZGxlR2FtZU92ZXIiLCJmaXJzdFR1cm4iLCJzY29yZUJvYXJkIiwiZ2FtZU1lc3NhZ2VUZXh0IiwiVG9nZ2xlUGxheWVyQWJpbGl0eSIsInNldFRpbWVvdXQiLCJDUFVUdXJuIiwidG9nZ2xlIiwic2NvcmUiLCJ1cGRhdGVTY29yZUJvYXJkIiwicmVzZXRCb2FyZCIsImhpZGVET01Cb2FyZCIsImJlc3RQb3NpdGlvbiIsInRvZ2dsZUJ0biIsInNpbmdsZVBsYXllckJ0biIsInR3b1BsYXllckJ0biIsImZvcm0iLCJwbGF5ZXJPbmVGb3JtIiwicGxheWVyT25lRm9ybU5hbWUiLCJwbGF5ZXJPbmVGb3JtU3ltYm9sIiwicGxheWVyVHdvRm9ybSIsInBsYXllclR3b0Zvcm1OYW1lIiwicGxheWVyVHdvRm9ybVN5bWJvbCIsImRpZmZpY3VsdHlCdG4iLCJlYXN5QnRuIiwibWVkaXVtQnRuIiwiaGFyZEJ0biIsInJldmVhbEZvcm0iLCJzZXREaWZmaWN1bHR5IiwiYnRuIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0NBSUE7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLElBQUlDLGtFQUFKLEVBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOztJQUVNQyxHOzs7OztBQUNGLGVBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQXlDO0FBQUE7O0FBQUEsUUFBZkMsUUFBZSx1RUFBSixDQUFDLENBQUc7O0FBQUE7O0FBQ3JDLDhCQUFNRixJQUFOLEVBQVlDLE1BQVo7QUFDQSxVQUFLQyxRQUFMLEdB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bUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTs7SUFFTWxDLE0sR0FDRixrQkFBd0M7QUFBQSxNQUE1QnRDLElBQTRCLHVFQUFyQixLQUFxQjtBQUFBLE1BQWRDLE1BQWMsdUVBQUwsR0FBSzs7QUFBQTs7QUFDcEMsT0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBSzBHLEtBQUwsR0FBYSxDQUFiO0FBQ0gsQzs7QUFHVXJFLHFFQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gaW1wb3J0IEdhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lXCI7XG5cbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVDb250cm9sbGVyXCI7XG5cbi8vIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5cbmNsYXNzIENQVSBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgc3ltYm9sLCBtYXhEZXB0aCA9IC0xKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHN5bWJvbCk7XG4gICAgICAgIHRoaXMubWF4RGVwdGggPSBtYXhEZXB0aDtcbiAgICAgICAgdGhpcy5ub2Rlc01hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBnZXRCZXN0TW92ZShcbiAgICAgICAgb3Bwb25lbnRTeW1ib2wsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBtYXhpbWl6aW5nID0gdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7fSxcbiAgICAgICAgZGVwdGggPSAwXG4gICAgKSB7XG4gICAgICAgIC8vY2xlYXIgbm9kZXNNYXAgaWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgYSBuZXcgbW92ZVxuICAgICAgICBpZiAoZGVwdGggPT0gMCkgdGhpcy5ub2Rlc01hcC5jbGVhcigpO1xuXG4gICAgICAgIC8vSWYgdGhlIGdhbWUgaXMgb3ZlciwgcmV0dXJuIHRoZSBhcHByb3BpYXRlIHZhbHVlXG4gICAgICAgIGlmIChib2FyZC5pc0dhbWVPdmVyKCkgfHwgZGVwdGggPT09IHRoaXMubWF4RGVwdGgpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5pc1dpbigpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLndpbm5pbmdTeW1ib2wgPT09IHRoaXMuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxMDAgLSBkZXB0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEwMCArIGRlcHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF4aW1pemluZykge1xuICAgICAgICAgICAgLy9Jbml0aWFsaXplIGJlc3QgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZVxuICAgICAgICAgICAgbGV0IGJlc3QgPSAtMTAwO1xuICAgICAgICAgICAgLy9Mb29wIHRocm91Z2ggYWxsIGVtcHR5IGNlbGxzXG4gICAgICAgICAgICBib2FyZC5nZXRBdmFpbGFibGVNb3ZlcygpLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAvL0luaXRpYWxpemUgYSBuZXcgYm9hcmQgd2l0aCBhIGNvcHkgb2Ygb3VyIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ldyBCb2FyZChbLi4uYm9hcmQuZ2V0VGlsZXMoKV0pO1xuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGEgY2hpbGQgbm9kZSBieSBpbnNlcnRpbmcgdGhlIG1heGltaXppbmcgc3ltYm9sIHggaW50byB0aGUgY3VycmVudCBlbXB0eSBjZWxsXG4gICAgICAgICAgICAgICAgY2hpbGQubWFya1RpbGUodGhpcy5zeW1ib2wsIGkpO1xuICAgICAgICAgICAgICAgIC8vUmVjdXJzaXZlbHkgY2FsbGluZyBnZXRCZXN0TW92ZSB0aGlzIHRpbWUgd2l0aCB0aGUgbmV3IGJvYXJkIGFuZCBtaW5pbWl6aW5nIHR1cm4gYW5kIGluY3JlbWVudGluZyB0aGUgZGVwdGhcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmdldEJlc3RNb3ZlKFxuICAgICAgICAgICAgICAgICAgICBvcHBvbmVudFN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggKyAxXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvL1VwZGF0aW5nIGJlc3QgdmFsdWVcbiAgICAgICAgICAgICAgICBiZXN0ID0gTWF0aC5tYXgoYmVzdCwgbm9kZVZhbHVlKTtcblxuICAgICAgICAgICAgICAgIC8vSWYgaXQncyB0aGUgbWFpbiBmdW5jdGlvbiBjYWxsLCBub3QgYSByZWN1cnNpdmUgb25lLCBtYXAgZWFjaCB2YWx1ZSB3aXRoIGl0J3MgbW92ZXMgaW5kaWNlc1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29tbWEgc2VwYXJhdGVkIGluZGljZXMgaWYgbXVsdGlwbGUgbW92ZXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlcyA9IHRoaXMubm9kZXNNYXAuaGFzKG5vZGVWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7dGhpcy5ub2Rlc01hcC5nZXQobm9kZVZhbHVlKX0sJHtpfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Rlc01hcC5zZXQobm9kZVZhbHVlLCBtb3Zlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0lmIGl0J3MgdGhlIG1haW4gY2FsbCwgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgYmVzdCBtb3ZlIG9yIGEgcmFuZG9tIGluZGV4IGlmIG11bHRpcGxlIGluZGljZXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgaWYgKGRlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm5vZGVzTWFwLmdldChiZXN0KSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHRoaXMubm9kZXNNYXAuZ2V0KGJlc3QpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFycltyYW5kXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMubm9kZXNNYXAuZ2V0KGJlc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3J1biBhIGNhbGxiYWNrIGFmdGVyIGNhbGN1bGF0aW9uIGFuZCByZXR1cm4gdGhlIGluZGV4XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSWYgbm90IG1haW4gY2FsbCAocmVjdXJzaXZlKSByZXR1cm4gdGhlIHZhbHVlIGZvciBuZXh0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICByZXR1cm4gYmVzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWF4aW1pemluZykge1xuICAgICAgICAgICAgLy9Jbml0aWFsaXplIGJlc3QgdG8gdGhlIGhpZ2hlc3QgcG9zc2libGUgdmFsdWVcbiAgICAgICAgICAgIGxldCBiZXN0ID0gMTAwO1xuICAgICAgICAgICAgLy9Mb29wIHRocm91Z2ggYWxsIGVtcHR5IGNlbGxzXG4gICAgICAgICAgICBib2FyZC5nZXRBdmFpbGFibGVNb3ZlcygpLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAvL0luaXRpYWxpemUgYSBuZXcgYm9hcmQgd2l0aCBhIGNvcHkgb2Ygb3VyIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ldyBCb2FyZChbLi4uYm9hcmQuZ2V0VGlsZXMoKV0pO1xuXG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBjaGlsZCBub2RlIGJ5IGluc2VydGluZyB0aGUgbWluaW1pemluZyBzeW1ib2wgbyBpbnRvIHRoZSBjdXJyZW50IGVtcHR5IGNlbGxcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXJrVGlsZShvcHBvbmVudFN5bWJvbCwgaSk7XG5cbiAgICAgICAgICAgICAgICAvL1JlY3Vyc2l2ZWx5IGNhbGxpbmcgZ2V0QmVzdE1vdmUgdGhpcyB0aW1lIHdpdGggdGhlIG5ldyBib2FyZCBhbmQgbWF4aW1pemluZyB0dXJuIGFuZCBpbmNyZW1lbnRpbmcgdGhlIGRlcHRoXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5nZXRCZXN0TW92ZShcbiAgICAgICAgICAgICAgICAgICAgb3Bwb25lbnRTeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggKyAxXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvL1VwZGF0aW5nIGJlc3QgdmFsdWVcbiAgICAgICAgICAgICAgICBiZXN0ID0gTWF0aC5taW4oYmVzdCwgbm9kZVZhbHVlKTtcblxuICAgICAgICAgICAgICAgIC8vSWYgaXQncyB0aGUgbWFpbiBmdW5jdGlvbiBjYWxsLCBub3QgYSByZWN1cnNpdmUgb25lLCBtYXAgZWFjaCB2YWx1ZSB3aXRoIGl0J3MgbW92ZXMgaW5kaWNlc1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29tbWEgc2VwYXJhdGVkIGluZGljZXMgaWYgbXVsdGlwbGUgbW92ZXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlcyA9IHRoaXMubm9kZXNNYXAuaGFzKG5vZGVWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5ub2Rlc01hcC5nZXQobm9kZVZhbHVlKSArIFwiLFwiICsgaVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzTWFwLnNldChub2RlVmFsdWUsIG1vdmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vSWYgaXQncyB0aGUgbWFpbiBjYWxsLCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBiZXN0IG1vdmUgb3IgYSByYW5kb20gaW5kZXggaWYgbXVsdGlwbGUgaW5kaWNlcyBoYXZlIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICBpZiAoZGVwdGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubm9kZXNNYXAuZ2V0KGJlc3QpID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gdGhpcy5ub2Rlc01hcC5nZXQoYmVzdCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gYXJyW3JhbmRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5ub2Rlc01hcC5nZXQoYmVzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vcnVuIGEgY2FsbGJhY2sgYWZ0ZXIgY2FsY3VsYXRpb24gYW5kIHJldHVybiB0aGUgaW5kZXhcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9JZiBub3QgbWFpbiBjYWxsIChyZWN1cnNpdmUpIHJldHVybiB0aGUgaGV1cmlzdGljIHZhbHVlIGZvciBuZXh0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICByZXR1cm4gYmVzdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1BVO1xuIiwiY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHRpbGVzID0gXCJub3QgY29weVwiKSB7XG4gICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lXCIpO1xuICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25zID0gW1xuICAgICAgICAgICAgWzAsIDEsIDJdLFxuICAgICAgICAgICAgWzMsIDQsIDVdLFxuICAgICAgICAgICAgWzYsIDcsIDhdLFxuICAgICAgICAgICAgWzAsIDMsIDZdLFxuICAgICAgICAgICAgWzEsIDQsIDddLFxuICAgICAgICAgICAgWzIsIDUsIDhdLFxuICAgICAgICAgICAgWzAsIDQsIDhdLFxuICAgICAgICAgICAgWzIsIDQsIDZdLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmlzQ29weSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRpbGVzID09IFwibm90IGNvcHlcIikge1xuICAgICAgICAgICAgdGhpcy5ET01Cb2FyZCA9IHRoaXMuY3JlYXRlRE9NQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb3B5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01FVEhPRFNcbiAgICBjcmVhdGVET01Cb2FyZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3VGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgICAgICAgIG5ld1RpbGUuY2xhc3NMaXN0LmFkZChcInVubWFya2VkXCIpO1xuICAgICAgICAgICAgbmV3VGlsZS5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGlsZVwiKV07XG4gICAgfVxuXG4gICAgcmV2ZWFsRE9NQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xuICAgIH1cblxuICAgIGhpZGVET01Cb2FyZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyZXZlYWxcIik7XG4gICAgfVxuXG4gICAgbWFya1RpbGUoc3ltYm9sLCBwb3NpdGlvbikge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZXNbcG9zaXRpb25dID0gc3ltYm9sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbcG9zaXRpb25dLmNsYXNzTGlzdC5jb250YWlucyhcInVubWFya2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1twb3NpdGlvbl0uaW5uZXJIVE1MID0gc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXZhaWxhYmxlTW92ZXMoKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW107XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCgodGlsZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3B5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUgPT09IFwiXCIpIG1vdmVzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLmlubmVySFRNTCA9PT0gXCJcIikgbW92ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzLmV2ZXJ5KCh0aWxlKSA9PiB0aWxlID09PSBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzLmV2ZXJ5KCh0aWxlKSA9PiB0aWxlLmlubmVySFRNTCA9PT0gXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0Z1bGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29weSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXMuZXZlcnkoKHRpbGUpID0+IHRpbGUgIT09IFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXMuZXZlcnkoKHRpbGUpID0+IHRpbGUuaW5uZXJIVE1MICE9PSBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzV2luKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpbm5pbmdDb25kaXRpb25zLnNvbWUoKGNvbmRpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0U3ltYm9sID0gdGhpcy50aWxlc1tjb25kaXRpb25bMF1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkZvdW5kID0gY29uZGl0aW9uLmV2ZXJ5KChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFN5bWJvbCA9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2ldID09IGZpcnN0U3ltYm9sO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbkZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uaW5nU3ltYm9sID0gdGhpcy50aWxlc1t0aGlzLndpbm5pbmdDb25kaXRpb25bMF1dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5Gb3VuZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lubmluZ0NvbmRpdGlvbnMuc29tZSgoY29uZGl0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RTeW1ib2wgPSB0aGlzLnRpbGVzW2NvbmRpdGlvblswXV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkZvdW5kID0gY29uZGl0aW9uLmV2ZXJ5KChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFN5bWJvbCA9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2ldLmlubmVySFRNTCA9PSBmaXJzdFN5bWJvbDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5Gb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmluZ1N5bWJvbCA9IHRoaXMudGlsZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25bMF1cbiAgICAgICAgICAgICAgICAgICAgXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbkZvdW5kO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1dpbigpIHx8IHRoaXMuaXNGdWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0VGlsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29weSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlcy5tYXAoKHRpbGUpID0+IHRpbGUuaW5uZXJIVE1MKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidW5tYXJrZWRcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHQtLWdyZXlcIik7XG4gICAgICAgICAgICB0aWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ1BVIGZyb20gXCIuL0NQVVwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lubmVyO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KCk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmUgPSBuZXcgUGxheWVyKFwiWFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJUd28gPSBuZXcgUGxheWVyKFwiT1wiKTtcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHRoaXMubWVudS5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplR2FtZS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWVudS5uZXdHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TmV3R2FtZS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWVudS5uZXdQbGF5ZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRUb01lbnUuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmJvYXJkLnRpbGVzLmZvckVhY2goKHRpbGUpID0+XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVBsYXllckNsaWNrLmJpbmQodGhpcykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy9NRVRIT0RTXG4gICAgaW5pdGlhbGl6ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMubWVudS5tYWluTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgY29uc3QgcGxheWVySW5mbyA9IHRoaXMubWVudS5nZXRQbGF5ZXJJbmZvKCk7XG5cbiAgICAgICAgdGhpcy5ib2FyZC5yZXZlYWxET01Cb2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXIoXG4gICAgICAgICAgICBwbGF5ZXJJbmZvLnBsYXllck9uZUluZm8ubmFtZSxcbiAgICAgICAgICAgIHBsYXllckluZm8ucGxheWVyT25lSW5mby5zeW1ib2xcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMubWVudS5pc1NpbmdsZVBsYXllcikge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUd28gPSBuZXcgQ1BVKFwiQ1BVXCIsIFwiT1wiLCB0aGlzLm1lbnUuZGlmZmljdWx0eSk7IC8vIG1ha2UgY29tcHV0ZXIgUGxheWVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclR3byA9IG5ldyBQbGF5ZXIoXG4gICAgICAgICAgICAgICAgcGxheWVySW5mby5wbGF5ZXJUd29JbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgcGxheWVySW5mby5wbGF5ZXJUd29JbmZvLnN5bWJvbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2hvV2VudEZpcnN0TGFzdEdhbWUgPSB0aGlzLnBsYXllclR3bztcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKHRydWUpO1xuICAgICAgICB0aGlzLnNldEFuZFJldmVhbFNjb3JlQm9hcmQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJDbGljayhlKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzR2FtZU92ZXIoKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCB0aWxlID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCB0aWxlSW5kZXggPSB0aWxlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGlmICghdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bm1hcmtlZFwiKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmJvYXJkLm1hcmtUaWxlKHRoaXMuY3VycmVudFBsYXllci5zeW1ib2wsICt0aWxlSW5kZXgpO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bm1hcmtlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRQbGF5ZXIoZmlyc3RUdXJuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpcnN0VHVybikge1xuICAgICAgICAgICAgaWYgKHRoaXMud2hvV2VudEZpcnN0TGFzdEdhbWUgPT0gdGhpcy5wbGF5ZXJPbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllclR3bztcbiAgICAgICAgICAgICAgICB0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID0gdGhpcy5wbGF5ZXJUd287XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllci10d28tdHVyblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJPbmU7XG4gICAgICAgICAgICAgICAgdGhpcy53aG9XZW50Rmlyc3RMYXN0R2FtZSA9IHRoaXMucGxheWVyT25lO1xuICAgICAgICAgICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5ZXItdHdvLXR1cm5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1lbnUuZ2FtZU1lc3NhZ2VUZXh0LmlubmVySFRNTCA9IGAke3RoaXMuY3VycmVudFBsYXllci5uYW1lfSBnb2VzIGZpcnN0LmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09IHRoaXMucGxheWVyT25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJUd287XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllci10d28tdHVyblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJPbmU7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXllci10d28tdHVyblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWVudS5nYW1lTWVzc2FnZVRleHQuaW5uZXJIVE1MID0gYCR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9J3MgdHVybi5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZSA9PSBcIkNQVVwiKSB7XG4gICAgICAgICAgICB0aGlzLlRvZ2dsZVBsYXllckFiaWxpdHkoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5DUFVUdXJuLmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVG9nZ2xlUGxheWVyQWJpbGl0eSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5nYW1lQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjbGljay1zaGllbGRcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlR2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzV2luKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zY29yZSsrO1xuICAgICAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQuY2xhc3NMaXN0LmFkZChcIndpblwiKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQud2lubmluZ0NvbmRpdGlvbi5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC50aWxlc1tpXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bm1hcmtlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tZW51LmdhbWVNZXNzYWdlVGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZX0gd2lucyFgO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZUJvYXJkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUuZ2FtZU1lc3NhZ2VUZXh0LmlubmVySFRNTCA9IGBJdCdzIGEgZHJhdyFgO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC50aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0LS1ncmV5XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZW51LmdhbWVNZXNzYWdlVGV4dC5jbGFzc0xpc3QuYWRkKFwiYmlnZ2VyXCIpO1xuICAgIH1cblxuICAgIHNldEFuZFJldmVhbFNjb3JlQm9hcmQoKSB7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc3ltYm9sLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUuc3ltYm9sO1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3N5bWJvbC10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLnN5bWJvbDtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19uYW1lLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUubmFtZTtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19uYW1lLXR3b1wiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJUd28ubmFtZTtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLnNjb3JlO1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3Njb3JlLXR3b1wiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJUd28uc2NvcmU7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWluZm9cIikuY2xhc3NMaXN0LmFkZChcInJldmVhbFwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZUJvYXJkKCkge1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3Njb3JlLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUuc2NvcmU7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc2NvcmUtdHdvXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllclR3by5zY29yZTtcbiAgICB9XG5cbiAgICBzdGFydE5ld0dhbWUoKSB7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ3aW5cIik7XG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQbGF5ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMubWVudS5nYW1lTWVzc2FnZVRleHQuY2xhc3NMaXN0LnJlbW92ZShcImJpZ2dlclwiKTtcbiAgICB9XG5cbiAgICByZXN0YXJ0VG9NZW51KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmhpZGVET01Cb2FyZCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmV2ZWFsXCIpO1xuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5tZW51Lm1haW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIENQVVR1cm4oKSB7XG4gICAgICAgIGNvbnN0IGJlc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyVHdvLmdldEJlc3RNb3ZlKFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJPbmUuc3ltYm9sLFxuICAgICAgICAgICAgdGhpcy5ib2FyZFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYm9hcmQubWFya1RpbGUodGhpcy5wbGF5ZXJUd28uc3ltYm9sLCBiZXN0UG9zaXRpb24pO1xuICAgICAgICB0aGlzLmJvYXJkLnRpbGVzW2Jlc3RQb3NpdGlvbl0uY2xhc3NMaXN0LnJlbW92ZShcInVubWFya2VkXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLlRvZ2dsZVBsYXllckFiaWxpdHkoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNTaW5nbGVQbGF5ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSAxO1xuICAgICAgICB0aGlzLm1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIik7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSB0aGlzLm1haW5NZW51LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXN0YXJ0XCIpO1xuICAgICAgICB0aGlzLm5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1uZXctZ2FtZVwiKTtcbiAgICAgICAgdGhpcy5uZXdQbGF5ZXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbmV3LXBsYXllcnNcIik7XG4gICAgICAgIHRoaXMudG9nZ2xlQnRuID0gdGhpcy5tYWluTWVudS5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1idG5cIik7XG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQnRuID0gdGhpcy50b2dnbGVCdG4ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmJ0bi1zaW5nbGUtcGxheWVyXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50d29QbGF5ZXJCdG4gPSB0aGlzLnRvZ2dsZUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmJ0bi10d28tcGxheWVyXCIpO1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLm1haW5NZW51LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmVGb3JtID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1mb3JtXCIpO1xuICAgICAgICB0aGlzLnBsYXllck9uZUZvcm1OYW1lID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9uZS1uYW1lXCIpO1xuICAgICAgICB0aGlzLnBsYXllck9uZUZvcm1TeW1ib2wgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnBsYXllci1vbmUtc3ltYm9sXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJUd29Gb3JtID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR3by1mb3JtXCIpO1xuICAgICAgICB0aGlzLnBsYXllclR3b0Zvcm1OYW1lID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR3by1uYW1lXCIpO1xuICAgICAgICB0aGlzLnBsYXllclR3b0Zvcm1TeW1ib2wgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnBsYXllci10d28tc3ltYm9sXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS1ib2FyZFwiKTtcbiAgICAgICAgdGhpcy5nYW1lTWVzc2FnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtbWVzc2FnZS10ZXh0XCIpO1xuICAgICAgICB0aGlzLmRpZmZpY3VsdHlCdG4gPSB0aGlzLm1haW5NZW51LnF1ZXJ5U2VsZWN0b3IoXCIudGhyZWUtd2F5LWJ0blwiKTtcbiAgICAgICAgdGhpcy5lYXN5QnRuID0gdGhpcy5kaWZmaWN1bHR5QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWVhc3lcIik7XG4gICAgICAgIHRoaXMubWVkaXVtQnRuID0gdGhpcy5kaWZmaWN1bHR5QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1lZGl1bVwiKTtcbiAgICAgICAgdGhpcy5oYXJkQnRuID0gdGhpcy5kaWZmaWN1bHR5QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWhhcmRcIik7XG5cbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG5cbiAgICBldmVudHMoKSB7XG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLnJldmVhbEZvcm0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnR3b1BsYXllckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXZlYWxGb3JtLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVhc3lCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2V0RGlmZmljdWx0eS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5tZWRpdW1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2V0RGlmZmljdWx0eS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5oYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNldERpZmZpY3VsdHkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcmV2ZWFsRm9ybShlKSB7XG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT0gdGhpcy5zaW5nbGVQbGF5ZXJCdG4pIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyVHdvRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2hcIik7XG4gICAgICAgICAgICB0aGlzLmlzU2luZ2xlUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyT25lRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyVHdvRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hcIik7XG4gICAgICAgICAgICB0aGlzLmlzU2luZ2xlUGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIHNldERpZmZpY3VsdHkoZSkge1xuICAgICAgICBjb25zdCBidG4gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGlmIChidG4gPT0gdGhpcy5lYXN5QnRuKSB7XG4gICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSAxO1xuICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2gtZWFzeVwiKTtcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic3dpdGNoLW1lZGl1bVwiKTtcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic3dpdGNoLWhhcmRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYnRuID09IHRoaXMubWVkaXVtQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSA1O1xuICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2gtZWFzeVwiKTtcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eUJ0bi5jbGFzc0xpc3QuYWRkKFwic3dpdGNoLW1lZGl1bVwiKTtcbiAgICAgICAgICAgIHRoaXMuZGlmZmljdWx0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic3dpdGNoLWhhcmRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYnRuID09IHRoaXMuaGFyZEJ0bikge1xuICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHlCdG4uY2xhc3NMaXN0LnJlbW92ZShcInN3aXRjaC1lYXN5XCIpO1xuICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2gtbWVkaXVtXCIpO1xuICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2gtaGFyZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBsYXllckluZm8oKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUluZm8gPSB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnBsYXllck9uZUZvcm1OYW1lLnZhbHVlIHx8IFwiUGxheWVyIE9uZVwiLFxuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnBsYXllck9uZUZvcm1TeW1ib2wudmFsdWUgfHwgXCJYXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGxheWVyVHdvSW5mbyA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucGxheWVyVHdvRm9ybU5hbWUudmFsdWUgfHwgXCJQbGF5ZXIgVHdvXCIsXG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMucGxheWVyVHdvRm9ybVN5bWJvbC52YWx1ZSB8fCBcIk9cIixcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyBwbGF5ZXJPbmVJbmZvLCBwbGF5ZXJUd29JbmZvIH07XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiQ1BVXCIsIHN5bWJvbCA9IFwiT1wiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=