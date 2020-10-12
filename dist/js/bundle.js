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
    this.difficulty = 1;
    this.isSinglePlayer = true;
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
      this.menu.easyBtn.addEventListener("click", this.setDifficulty.bind(this));
      this.menu.mediumBtn.addEventListener("click", this.setDifficulty.bind(this));
      this.menu.hardBtn.addEventListener("click", this.setDifficulty.bind(this));
    } //METHODS

  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.menu.mainMenu.classList.add("hide");
      var playerOneName = this.menu.playerOneFormName.value || "Player One";
      var playerOneSymbol = this.menu.playerOneFormSymbol.value || "X";
      this.board.revealDOMBoard();
      this.playerOne = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](playerOneName, playerOneSymbol);

      if (this.isSinglePlayer) {
        this.playerTwo = new _CPU__WEBPACK_IMPORTED_MODULE_3__["default"]("CPU", "O", this.difficulty); // make computer Player
      } else {
        var playerTwoName = this.menu.playerTwoFormName.value || "Player Two";
        var playerTwoSymbol = this.menu.playerTwoFormSymbol.value || "O";
        this.playerTwo = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](playerTwoName, playerTwoSymbol);
      }

      this.whoWentFirstLastGame = this.playerTwo;
      this.updateCurrentPlayer(true);
      this.setAndRevealScoreBoard();
    }
  }, {
    key: "setDifficulty",
    value: function setDifficulty(e) {
      var btn = e.currentTarget;

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
  }, {
    key: "revealForm",
    value: function revealForm(e) {
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
        setTimeout(this.CPUTurn.bind(this), 2000);
      }
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
      console.log(bestPosition);
      this.board.markTile(this.playerTwo.symbol, bestPosition);
      this.board.tiles[bestPosition].classList.remove("unmarked");

      if (this.board.isGameOver()) {
        this.handleGameOver();
      } else {
        this.updateCurrentPlayer();
      }
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
  this.playerOneFormSymbol = this.form.querySelector(".player-one-symbol");
  this.playerTwoForm = this.form.querySelector(".player-two-form");
  this.playerTwoFormName = this.form.querySelector(".player-two-name");
  this.playerTwoFormSymbol = this.form.querySelector(".player-two-symbol");
  this.scoreBoard = document.querySelector(".score-board");
  this.gameMessageText = document.querySelector(".game-message-text");
  this.difficultyBtn = document.querySelector(".three-way-btn");
  this.easyBtn = this.difficultyBtn.querySelector(".btn-easy");
  this.mediumBtn = this.difficultyBtn.querySelector(".btn-medium");
  this.hardBtn = this.difficultyBtn.querySelector(".btn-hard");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DUFUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiZ2FtZUNvbnRyb2xsZXIiLCJHYW1lQ29udHJvbGxlciIsIkNQVSIsIm5hbWUiLCJzeW1ib2wiLCJtYXhEZXB0aCIsIm5vZGVzTWFwIiwiTWFwIiwib3Bwb25lbnRTeW1ib2wiLCJib2FyZCIsIm1heGltaXppbmciLCJjYWxsYmFjayIsImRlcHRoIiwiY2xlYXIiLCJpc0dhbWVPdmVyIiwiaXNXaW4iLCJ3aW5uaW5nU3ltYm9sIiwiYmVzdCIsImdldEF2YWlsYWJsZU1vdmVzIiwiZm9yRWFjaCIsImkiLCJjaGlsZCIsIkJvYXJkIiwiZ2V0VGlsZXMiLCJtYXJrVGlsZSIsIm5vZGVWYWx1ZSIsImdldEJlc3RNb3ZlIiwiTWF0aCIsIm1heCIsIm1vdmVzIiwiaGFzIiwiZ2V0Iiwic2V0IiwicmV0dXJuVmFsdWUiLCJhcnIiLCJzcGxpdCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm1pbiIsIlBsYXllciIsInRpbGVzIiwiZ2FtZUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbm5pbmdDb25kaXRpb25zIiwiaXNDb3B5IiwiRE9NQm9hcmQiLCJjcmVhdGVET01Cb2FyZCIsIm5ld1RpbGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImluZGV4IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwicG9zaXRpb24iLCJjb250YWlucyIsImlubmVySFRNTCIsInRpbGUiLCJwdXNoIiwiZXZlcnkiLCJzb21lIiwiY29uZGl0aW9uIiwiZmlyc3RTeW1ib2wiLCJ3aW5Gb3VuZCIsIndpbm5pbmdDb25kaXRpb24iLCJpc0Z1bGwiLCJtYXAiLCJ3aW5uZXIiLCJkaWZmaWN1bHR5IiwiaXNTaW5nbGVQbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwibWVudSIsIk1lbnUiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJldmVudHMiLCJzdGFydEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsaXplR2FtZSIsImJpbmQiLCJzaW5nbGVQbGF5ZXJCdG4iLCJyZXZlYWxGb3JtIiwidHdvUGxheWVyQnRuIiwibmV3R2FtZUJ0biIsInN0YXJ0TmV3R2FtZSIsIm5ld1BsYXllcnNCdG4iLCJyZXN0YXJ0VG9NZW51IiwiaGFuZGxlUGxheWVyQ2xpY2siLCJlYXN5QnRuIiwic2V0RGlmZmljdWx0eSIsIm1lZGl1bUJ0biIsImhhcmRCdG4iLCJtYWluTWVudSIsInBsYXllck9uZU5hbWUiLCJwbGF5ZXJPbmVGb3JtTmFtZSIsInZhbHVlIiwicGxheWVyT25lU3ltYm9sIiwicGxheWVyT25lRm9ybVN5bWJvbCIsInJldmVhbERPTUJvYXJkIiwicGxheWVyVHdvTmFtZSIsInBsYXllclR3b0Zvcm1OYW1lIiwicGxheWVyVHdvU3ltYm9sIiwicGxheWVyVHdvRm9ybVN5bWJvbCIsIndob1dlbnRGaXJzdExhc3RHYW1lIiwidXBkYXRlQ3VycmVudFBsYXllciIsInNldEFuZFJldmVhbFNjb3JlQm9hcmQiLCJlIiwiYnRuIiwiY3VycmVudFRhcmdldCIsImRpZmZpY3VsdHlCdG4iLCJwbGF5ZXJUd29Gb3JtIiwidG9nZ2xlQnRuIiwicGxheWVyT25lRm9ybSIsImZvcm0iLCJ0aWxlSW5kZXgiLCJoYW5kbGVHYW1lT3ZlciIsImZpcnN0VHVybiIsInNjb3JlQm9hcmQiLCJnYW1lTWVzc2FnZVRleHQiLCJzZXRUaW1lb3V0IiwiQ1BVVHVybiIsInNjb3JlIiwidXBkYXRlU2NvcmVCb2FyZCIsInJlc2V0Qm9hcmQiLCJoaWRlRE9NQm9hcmQiLCJiZXN0UG9zaXRpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtDQUlBOztBQUNBLElBQU1BLGNBQWMsR0FBRyxJQUFJQyxrRUFBSixFQUF2QixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7O0lBRU1DLEc7Ozs7O0FBQ0YsZUFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBeUM7QUFBQTs7QUFBQSxR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TCxHQUFxQnRFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxPQUFLZ0QsT0FBTCxHQUFlLEtBQUtxQixhQUFMLENBQW1CckUsYUFBbkIsQ0FBaUMsV0FBakMsQ0FBZjtBQUNBLE9BQUtrRCxTQUFMLEdBQWlCLEtBQUttQixhQUFMLENBQW1CckUsYUFBbkIsQ0FBaUMsYUFBakMsQ0FBakI7QUFDQSxPQUFLbUQsT0FBTCxHQUFlLEtBQUtrQixhQUFMLENBQW1CckUsYUFBbkIsQ0FBaUMsV0FBakMsQ0FBZjtBQUNILEM7O0FBR1VnQyxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOztJQUVNcEMsTSxHQUNGLGtCQUF3QztBQUFBLE1BQTVCdEMsSUFBNEIsdUVBQXJCLEtBQXFCO0FBQUEsTUFBZEMsTUFBYyx1RUFBTCxHQUFLOztBQUFBOztBQUNwQyxPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLMEgsS0FBTCxHQUFhLENBQWI7QUFDSCxDOztBQUdVckYscUVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVcIjtcblxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZUNvbnRyb2xsZXJcIjtcblxuLy8gbGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIoKTtcblxuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJYXCIsIDApO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJYXCIsIDEpO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJPXCIsIDIpO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJYXCIsIDMpO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJPXCIsIDQpO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJPXCIsIDUpO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJYXCIsIDYpO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJPXCIsIDcpO1xuLy8gZ2FtZUNvbnRyb2xsZXIuYm9hcmQubWFya1RpbGUoXCJYXCIsIDgpO1xuXG4vLyBjb25zb2xlLmxvZyhnYW1lQ29udHJvbGxlci5wbGF5ZXJPbmUpO1xuLy8gY29uc29sZS5sb2coZ2FtZUNvbnRyb2xsZXIucGxheWVyVHdvKTtcblxuLy8gY29uc29sZS5sb2coXG4vLyAgICAgZ2FtZUNvbnRyb2xsZXIucGxheWVyT25lLmdldEJlc3RNb3ZlKFxuLy8gICAgICAgICBnYW1lQ29udHJvbGxlci5wbGF5ZXJUd28uc3ltYm9sLFxuLy8gICAgICAgICBnYW1lQ29udHJvbGxlci5ib2FyZFxuLy8gICAgIClcbi8vICk7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5cbmNsYXNzIENQVSBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgc3ltYm9sLCBtYXhEZXB0aCA9IC0xKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHN5bWJvbCk7XG4gICAgICAgIHRoaXMubWF4RGVwdGggPSBtYXhEZXB0aDtcbiAgICAgICAgdGhpcy5ub2Rlc01hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBnZXRCZXN0TW92ZShcbiAgICAgICAgb3Bwb25lbnRTeW1ib2wsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBtYXhpbWl6aW5nID0gdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7fSxcbiAgICAgICAgZGVwdGggPSAwXG4gICAgKSB7XG4gICAgICAgIC8vY2xlYXIgbm9kZXNNYXAgaWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgYSBuZXcgbW92ZVxuICAgICAgICBpZiAoZGVwdGggPT0gMCkgdGhpcy5ub2Rlc01hcC5jbGVhcigpO1xuXG4gICAgICAgIC8vSWYgdGhlIGdhbWUgaXMgb3ZlciwgcmV0dXJuIHRoZSBhcHByb3BpYXRlIHZhbHVlXG4gICAgICAgIGlmIChib2FyZC5pc0dhbWVPdmVyKCkgfHwgZGVwdGggPT09IHRoaXMubWF4RGVwdGgpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5pc1dpbigpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLndpbm5pbmdTeW1ib2wgPT09IHRoaXMuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxMDAgLSBkZXB0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEwMCArIGRlcHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF4aW1pemluZykge1xuICAgICAgICAgICAgLy9Jbml0aWFsaXplIGJlc3QgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZVxuICAgICAgICAgICAgbGV0IGJlc3QgPSAtMTAwO1xuICAgICAgICAgICAgLy9Mb29wIHRocm91Z2ggYWxsIGVtcHR5IGNlbGxzXG4gICAgICAgICAgICBib2FyZC5nZXRBdmFpbGFibGVNb3ZlcygpLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAvL0luaXRpYWxpemUgYSBuZXcgYm9hcmQgd2l0aCBhIGNvcHkgb2Ygb3VyIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ldyBCb2FyZChbLi4uYm9hcmQuZ2V0VGlsZXMoKV0pO1xuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGEgY2hpbGQgbm9kZSBieSBpbnNlcnRpbmcgdGhlIG1heGltaXppbmcgc3ltYm9sIHggaW50byB0aGUgY3VycmVudCBlbXB0eSBjZWxsXG4gICAgICAgICAgICAgICAgY2hpbGQubWFya1RpbGUodGhpcy5zeW1ib2wsIGkpO1xuICAgICAgICAgICAgICAgIC8vUmVjdXJzaXZlbHkgY2FsbGluZyBnZXRCZXN0TW92ZSB0aGlzIHRpbWUgd2l0aCB0aGUgbmV3IGJvYXJkIGFuZCBtaW5pbWl6aW5nIHR1cm4gYW5kIGluY3JlbWVudGluZyB0aGUgZGVwdGhcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmdldEJlc3RNb3ZlKFxuICAgICAgICAgICAgICAgICAgICBvcHBvbmVudFN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggKyAxXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvL1VwZGF0aW5nIGJlc3QgdmFsdWVcbiAgICAgICAgICAgICAgICBiZXN0ID0gTWF0aC5tYXgoYmVzdCwgbm9kZVZhbHVlKTtcblxuICAgICAgICAgICAgICAgIC8vSWYgaXQncyB0aGUgbWFpbiBmdW5jdGlvbiBjYWxsLCBub3QgYSByZWN1cnNpdmUgb25lLCBtYXAgZWFjaCB2YWx1ZSB3aXRoIGl0J3MgbW92ZXMgaW5kaWNlc1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29tbWEgc2VwYXJhdGVkIGluZGljZXMgaWYgbXVsdGlwbGUgbW92ZXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlcyA9IHRoaXMubm9kZXNNYXAuaGFzKG5vZGVWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7dGhpcy5ub2Rlc01hcC5nZXQobm9kZVZhbHVlKX0sJHtpfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2Rlc01hcC5zZXQobm9kZVZhbHVlLCBtb3Zlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0lmIGl0J3MgdGhlIG1haW4gY2FsbCwgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgYmVzdCBtb3ZlIG9yIGEgcmFuZG9tIGluZGV4IGlmIG11bHRpcGxlIGluZGljZXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgaWYgKGRlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm5vZGVzTWFwLmdldChiZXN0KSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHRoaXMubm9kZXNNYXAuZ2V0KGJlc3QpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFycltyYW5kXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMubm9kZXNNYXAuZ2V0KGJlc3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3J1biBhIGNhbGxiYWNrIGFmdGVyIGNhbGN1bGF0aW9uIGFuZCByZXR1cm4gdGhlIGluZGV4XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSWYgbm90IG1haW4gY2FsbCAocmVjdXJzaXZlKSByZXR1cm4gdGhlIHZhbHVlIGZvciBuZXh0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICByZXR1cm4gYmVzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWF4aW1pemluZykge1xuICAgICAgICAgICAgLy9Jbml0aWFsaXplIGJlc3QgdG8gdGhlIGhpZ2hlc3QgcG9zc2libGUgdmFsdWVcbiAgICAgICAgICAgIGxldCBiZXN0ID0gMTAwO1xuICAgICAgICAgICAgLy9Mb29wIHRocm91Z2ggYWxsIGVtcHR5IGNlbGxzXG4gICAgICAgICAgICBib2FyZC5nZXRBdmFpbGFibGVNb3ZlcygpLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAvL0luaXRpYWxpemUgYSBuZXcgYm9hcmQgd2l0aCBhIGNvcHkgb2Ygb3VyIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ldyBCb2FyZChbLi4uYm9hcmQuZ2V0VGlsZXMoKV0pO1xuXG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBjaGlsZCBub2RlIGJ5IGluc2VydGluZyB0aGUgbWluaW1pemluZyBzeW1ib2wgbyBpbnRvIHRoZSBjdXJyZW50IGVtcHR5IGNlbGxcbiAgICAgICAgICAgICAgICBjaGlsZC5tYXJrVGlsZShvcHBvbmVudFN5bWJvbCwgaSk7XG5cbiAgICAgICAgICAgICAgICAvL1JlY3Vyc2l2ZWx5IGNhbGxpbmcgZ2V0QmVzdE1vdmUgdGhpcyB0aW1lIHdpdGggdGhlIG5ldyBib2FyZCBhbmQgbWF4aW1pemluZyB0dXJuIGFuZCBpbmNyZW1lbnRpbmcgdGhlIGRlcHRoXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5nZXRCZXN0TW92ZShcbiAgICAgICAgICAgICAgICAgICAgb3Bwb25lbnRTeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggKyAxXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvL1VwZGF0aW5nIGJlc3QgdmFsdWVcbiAgICAgICAgICAgICAgICBiZXN0ID0gTWF0aC5taW4oYmVzdCwgbm9kZVZhbHVlKTtcblxuICAgICAgICAgICAgICAgIC8vSWYgaXQncyB0aGUgbWFpbiBmdW5jdGlvbiBjYWxsLCBub3QgYSByZWN1cnNpdmUgb25lLCBtYXAgZWFjaCB2YWx1ZSB3aXRoIGl0J3MgbW92ZXMgaW5kaWNlc1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29tbWEgc2VwYXJhdGVkIGluZGljZXMgaWYgbXVsdGlwbGUgbW92ZXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZlcyA9IHRoaXMubm9kZXNNYXAuaGFzKG5vZGVWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5ub2Rlc01hcC5nZXQobm9kZVZhbHVlKSArIFwiLFwiICsgaVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzTWFwLnNldChub2RlVmFsdWUsIG1vdmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vSWYgaXQncyB0aGUgbWFpbiBjYWxsLCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBiZXN0IG1vdmUgb3IgYSByYW5kb20gaW5kZXggaWYgbXVsdGlwbGUgaW5kaWNlcyBoYXZlIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgICAgICBpZiAoZGVwdGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubm9kZXNNYXAuZ2V0KGJlc3QpID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gdGhpcy5ub2Rlc01hcC5nZXQoYmVzdCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gYXJyW3JhbmRdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5ub2Rlc01hcC5nZXQoYmVzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vcnVuIGEgY2FsbGJhY2sgYWZ0ZXIgY2FsY3VsYXRpb24gYW5kIHJldHVybiB0aGUgaW5kZXhcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9JZiBub3QgbWFpbiBjYWxsIChyZWN1cnNpdmUpIHJldHVybiB0aGUgaGV1cmlzdGljIHZhbHVlIGZvciBuZXh0IGNhbGN1bGF0aW9uXG4gICAgICAgICAgICByZXR1cm4gYmVzdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1BVO1xuIiwiY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHRpbGVzID0gXCJub3QgY29weVwiKSB7XG4gICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lXCIpO1xuICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25zID0gW1xuICAgICAgICAgICAgWzAsIDEsIDJdLFxuICAgICAgICAgICAgWzMsIDQsIDVdLFxuICAgICAgICAgICAgWzYsIDcsIDhdLFxuICAgICAgICAgICAgWzAsIDMsIDZdLFxuICAgICAgICAgICAgWzEsIDQsIDddLFxuICAgICAgICAgICAgWzIsIDUsIDhdLFxuICAgICAgICAgICAgWzAsIDQsIDhdLFxuICAgICAgICAgICAgWzIsIDQsIDZdLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmlzQ29weSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRpbGVzID09IFwibm90IGNvcHlcIikge1xuICAgICAgICAgICAgdGhpcy5ET01Cb2FyZCA9IHRoaXMuY3JlYXRlRE9NQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb3B5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01FVEhPRFNcbiAgICBjcmVhdGVET01Cb2FyZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3VGlsZS5jbGFzc0xpc3QuYWRkKFwidGlsZVwiKTtcbiAgICAgICAgICAgIG5ld1RpbGUuY2xhc3NMaXN0LmFkZChcInVubWFya2VkXCIpO1xuICAgICAgICAgICAgbmV3VGlsZS5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGlsZVwiKV07XG4gICAgfVxuXG4gICAgcmV2ZWFsRE9NQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xuICAgIH1cblxuICAgIGhpZGVET01Cb2FyZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyZXZlYWxcIik7XG4gICAgfVxuXG4gICAgbWFya1RpbGUoc3ltYm9sLCBwb3NpdGlvbikge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZXNbcG9zaXRpb25dID0gc3ltYm9sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbcG9zaXRpb25dLmNsYXNzTGlzdC5jb250YWlucyhcInVubWFya2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1twb3NpdGlvbl0uaW5uZXJIVE1MID0gc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXZhaWxhYmxlTW92ZXMoKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW107XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCgodGlsZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb3B5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUgPT09IFwiXCIpIG1vdmVzLnB1c2goaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLmlubmVySFRNTCA9PT0gXCJcIikgbW92ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzLmV2ZXJ5KCh0aWxlKSA9PiB0aWxlID09PSBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzLmV2ZXJ5KCh0aWxlKSA9PiB0aWxlLmlubmVySFRNTCA9PT0gXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0Z1bGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29weSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXMuZXZlcnkoKHRpbGUpID0+IHRpbGUgIT09IFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXMuZXZlcnkoKHRpbGUpID0+IHRpbGUuaW5uZXJIVE1MICE9PSBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzV2luKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvcHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpbm5pbmdDb25kaXRpb25zLnNvbWUoKGNvbmRpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0U3ltYm9sID0gdGhpcy50aWxlc1tjb25kaXRpb25bMF1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkZvdW5kID0gY29uZGl0aW9uLmV2ZXJ5KChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFN5bWJvbCA9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2ldID09IGZpcnN0U3ltYm9sO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbkZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uaW5nU3ltYm9sID0gdGhpcy50aWxlc1t0aGlzLndpbm5pbmdDb25kaXRpb25bMF1dO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5Gb3VuZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lubmluZ0NvbmRpdGlvbnMuc29tZSgoY29uZGl0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RTeW1ib2wgPSB0aGlzLnRpbGVzW2NvbmRpdGlvblswXV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkZvdW5kID0gY29uZGl0aW9uLmV2ZXJ5KChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFN5bWJvbCA9PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2ldLmlubmVySFRNTCA9PSBmaXJzdFN5bWJvbDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5Gb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmluZ1N5bWJvbCA9IHRoaXMudGlsZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25bMF1cbiAgICAgICAgICAgICAgICAgICAgXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbkZvdW5kO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1dpbigpIHx8IHRoaXMuaXNGdWxsKCk7XG4gICAgfVxuXG4gICAgZ2V0VGlsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29weSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlcy5tYXAoKHRpbGUpID0+IHRpbGUuaW5uZXJIVE1MKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidW5tYXJrZWRcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHQtLWdyZXlcIik7XG4gICAgICAgICAgICB0aWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQ1BVIGZyb20gXCIuL0NQVVwiO1xuXG5jbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lubmVyO1xuICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSAxO1xuICAgICAgICB0aGlzLmlzU2luZ2xlUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudSgpO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgICAgIHRoaXMucGxheWVyT25lID0gbmV3IFBsYXllcihcIlhcIik7XG4gICAgICAgIHRoaXMucGxheWVyVHdvID0gbmV3IFBsYXllcihcIk9cIik7XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICB0aGlzLm1lbnUuc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdhbWUuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm1lbnUuc2luZ2xlUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLnJldmVhbEZvcm0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm1lbnUudHdvUGxheWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLnJldmVhbEZvcm0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm1lbnUubmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5zdGFydE5ld0dhbWUuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm1lbnUubmV3UGxheWVyc0J0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0VG9NZW51LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ib2FyZC50aWxlcy5mb3JFYWNoKCh0aWxlKSA9PlxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQbGF5ZXJDbGljay5iaW5kKHRoaXMpKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm1lbnUuZWFzeUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5zZXREaWZmaWN1bHR5LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZW51Lm1lZGl1bUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgdGhpcy5zZXREaWZmaWN1bHR5LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tZW51LmhhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMuc2V0RGlmZmljdWx0eS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy9NRVRIT0RTXG4gICAgaW5pdGlhbGl6ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMubWVudS5tYWluTWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyT25lTmFtZSA9IHRoaXMubWVudS5wbGF5ZXJPbmVGb3JtTmFtZS52YWx1ZSB8fCBcIlBsYXllciBPbmVcIjtcbiAgICAgICAgY29uc3QgcGxheWVyT25lU3ltYm9sID0gdGhpcy5tZW51LnBsYXllck9uZUZvcm1TeW1ib2wudmFsdWUgfHwgXCJYXCI7XG5cbiAgICAgICAgdGhpcy5ib2FyZC5yZXZlYWxET01Cb2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXIocGxheWVyT25lTmFtZSwgcGxheWVyT25lU3ltYm9sKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyVHdvID0gbmV3IENQVShcIkNQVVwiLCBcIk9cIiwgdGhpcy5kaWZmaWN1bHR5KTsgLy8gbWFrZSBjb21wdXRlciBQbGF5ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b05hbWUgPVxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5wbGF5ZXJUd29Gb3JtTmFtZS52YWx1ZSB8fCBcIlBsYXllciBUd29cIjtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b1N5bWJvbCA9IHRoaXMubWVudS5wbGF5ZXJUd29Gb3JtU3ltYm9sLnZhbHVlIHx8IFwiT1wiO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUd28gPSBuZXcgUGxheWVyKHBsYXllclR3b05hbWUsIHBsYXllclR3b1N5bWJvbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID0gdGhpcy5wbGF5ZXJUd287XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFBsYXllcih0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRBbmRSZXZlYWxTY29yZUJvYXJkKCk7XG4gICAgfVxuXG4gICAgc2V0RGlmZmljdWx0eShlKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKGJ0biA9PSB0aGlzLm1lbnUuZWFzeUJ0bikge1xuICAgICAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gMTtcbiAgICAgICAgICAgIHRoaXMubWVudS5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2gtZWFzeVwiKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2gtbWVkaXVtXCIpO1xuICAgICAgICAgICAgdGhpcy5tZW51LmRpZmZpY3VsdHlCdG4uY2xhc3NMaXN0LnJlbW92ZShcInN3aXRjaC1oYXJkXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGJ0biA9PSB0aGlzLm1lbnUubWVkaXVtQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSA1O1xuICAgICAgICAgICAgdGhpcy5tZW51LmRpZmZpY3VsdHlCdG4uY2xhc3NMaXN0LnJlbW92ZShcInN3aXRjaC1lYXN5XCIpO1xuICAgICAgICAgICAgdGhpcy5tZW51LmRpZmZpY3VsdHlCdG4uY2xhc3NMaXN0LmFkZChcInN3aXRjaC1tZWRpdW1cIik7XG4gICAgICAgICAgICB0aGlzLm1lbnUuZGlmZmljdWx0eUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic3dpdGNoLWhhcmRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYnRuID09IHRoaXMubWVudS5oYXJkQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSAtMTtcbiAgICAgICAgICAgIHRoaXMubWVudS5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2gtZWFzeVwiKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5kaWZmaWN1bHR5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2gtbWVkaXVtXCIpO1xuICAgICAgICAgICAgdGhpcy5tZW51LmRpZmZpY3VsdHlCdG4uY2xhc3NMaXN0LmFkZChcInN3aXRjaC1oYXJkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV2ZWFsRm9ybShlKSB7XG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT0gdGhpcy5tZW51LnNpbmdsZVBsYXllckJ0bikge1xuICAgICAgICAgICAgdGhpcy5tZW51LnBsYXllclR3b0Zvcm0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICB0aGlzLm1lbnUudG9nZ2xlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2l0Y2hcIik7XG4gICAgICAgICAgICB0aGlzLm1lbnUudHdvUGxheWVyQnRuLmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpO1xuICAgICAgICAgICAgdGhpcy5tZW51LnNpbmdsZVBsYXllckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICAgICAgICAgIHRoaXMuaXNTaW5nbGVQbGF5ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tZW51LmRpZmZpY3VsdHlCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUucGxheWVyT25lRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5wbGF5ZXJUd29Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgdGhpcy5tZW51LnRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKFwic3dpdGNoXCIpO1xuICAgICAgICAgICAgdGhpcy5tZW51LnR3b1BsYXllckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcbiAgICAgICAgICAgIHRoaXMubWVudS5zaW5nbGVQbGF5ZXJCdG4uY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XG4gICAgICAgICAgICB0aGlzLmlzU2luZ2xlUGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1lbnUuZGlmZmljdWx0eUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lbnUuZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgdGhpcy5tZW51LnN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmQuaXNHYW1lT3ZlcigpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRpbGUgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IHRpbGVJbmRleCA9IHRpbGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgaWYgKCF0aWxlLmNsYXNzTGlzdC5jb250YWlucyhcInVubWFya2VkXCIpKSByZXR1cm47XG4gICAgICAgIHRoaXMuYm9hcmQubWFya1RpbGUodGhpcy5jdXJyZW50UGxheWVyLnN5bWJvbCwgK3RpbGVJbmRleCk7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcInVubWFya2VkXCIpO1xuICAgICAgICBpZiAodGhpcy5ib2FyZC5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFBsYXllcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFBsYXllcihmaXJzdFR1cm4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoZmlyc3RUdXJuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53aG9XZW50Rmlyc3RMYXN0R2FtZSA9PSB0aGlzLnBsYXllck9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyVHdvO1xuICAgICAgICAgICAgICAgIHRoaXMud2hvV2VudEZpcnN0TGFzdEdhbWUgPSB0aGlzLnBsYXllclR3bztcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXR3by10dXJuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllck9uZTtcbiAgICAgICAgICAgICAgICB0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID0gdGhpcy5wbGF5ZXJPbmU7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXllci10d28tdHVyblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWVudS5nYW1lTWVzc2FnZVRleHQuaW5uZXJIVE1MID0gYCR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9IGdvZXMgZmlyc3QuYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gdGhpcy5wbGF5ZXJPbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllclR3bztcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXR3by10dXJuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllck9uZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWVyLXR3by10dXJuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZW51LmdhbWVNZXNzYWdlVGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZX0ncyB0dXJuLmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllci5uYW1lID09IFwiQ1BVXCIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5DUFVUdXJuLmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlR2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzV2luKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zY29yZSsrO1xuICAgICAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQuY2xhc3NMaXN0LmFkZChcIndpblwiKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQud2lubmluZ0NvbmRpdGlvbi5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC50aWxlc1tpXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bm1hcmtlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tZW51LmdhbWVNZXNzYWdlVGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZX0gd2lucyFgO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZUJvYXJkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUuZ2FtZU1lc3NhZ2VUZXh0LmlubmVySFRNTCA9IGBJdCdzIGEgZHJhdyFgO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC50aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0LS1ncmV5XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZW51LmdhbWVNZXNzYWdlVGV4dC5jbGFzc0xpc3QuYWRkKFwiYmlnZ2VyXCIpO1xuICAgIH1cblxuICAgIHNldEFuZFJldmVhbFNjb3JlQm9hcmQoKSB7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc3ltYm9sLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUuc3ltYm9sO1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3N5bWJvbC10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLnN5bWJvbDtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19uYW1lLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUubmFtZTtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19uYW1lLXR3b1wiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJUd28ubmFtZTtcbiAgICAgICAgdGhpcy5tZW51LnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLnNjb3JlO1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3Njb3JlLXR3b1wiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJUd28uc2NvcmU7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWluZm9cIikuY2xhc3NMaXN0LmFkZChcInJldmVhbFwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZUJvYXJkKCkge1xuICAgICAgICB0aGlzLm1lbnUuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3Njb3JlLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUuc2NvcmU7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc2NvcmUtdHdvXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllclR3by5zY29yZTtcbiAgICB9XG5cbiAgICBzdGFydE5ld0dhbWUoKSB7XG4gICAgICAgIHRoaXMubWVudS5zY29yZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ3aW5cIik7XG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQbGF5ZXIodHJ1ZSk7XG4gICAgICAgIHRoaXMubWVudS5nYW1lTWVzc2FnZVRleHQuY2xhc3NMaXN0LnJlbW92ZShcImJpZ2dlclwiKTtcbiAgICB9XG5cbiAgICByZXN0YXJ0VG9NZW51KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmhpZGVET01Cb2FyZCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmV2ZWFsXCIpO1xuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5tZW51Lm1haW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIENQVVR1cm4oKSB7XG4gICAgICAgIGNvbnN0IGJlc3RQb3NpdGlvbiA9IHRoaXMucGxheWVyVHdvLmdldEJlc3RNb3ZlKFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJPbmUuc3ltYm9sLFxuICAgICAgICAgICAgdGhpcy5ib2FyZFxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhiZXN0UG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuYm9hcmQubWFya1RpbGUodGhpcy5wbGF5ZXJUd28uc3ltYm9sLCBiZXN0UG9zaXRpb24pO1xuICAgICAgICB0aGlzLmJvYXJkLnRpbGVzW2Jlc3RQb3NpdGlvbl0uY2xhc3NMaXN0LnJlbW92ZShcInVubWFya2VkXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXN0YXJ0XCIpO1xuICAgICAgICB0aGlzLm5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1uZXctZ2FtZVwiKTtcbiAgICAgICAgdGhpcy5uZXdQbGF5ZXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbmV3LXBsYXllcnNcIik7XG4gICAgICAgIHRoaXMudG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtYnRuXCIpO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNpbmdsZS1wbGF5ZXJcIik7XG4gICAgICAgIHRoaXMudHdvUGxheWVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tdHdvLXBsYXllclwiKTtcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dHMtY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnBsYXllck9uZUZvcm0gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItb25lLWZvcm1cIik7XG4gICAgICAgIHRoaXMucGxheWVyT25lRm9ybU5hbWUgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItb25lLW5hbWVcIik7XG4gICAgICAgIHRoaXMucGxheWVyT25lRm9ybVN5bWJvbCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIucGxheWVyLW9uZS1zeW1ib2xcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBsYXllclR3b0Zvcm0gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvLWZvcm1cIik7XG4gICAgICAgIHRoaXMucGxheWVyVHdvRm9ybU5hbWUgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHdvLW5hbWVcIik7XG4gICAgICAgIHRoaXMucGxheWVyVHdvRm9ybVN5bWJvbCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIucGxheWVyLXR3by1zeW1ib2xcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLWJvYXJkXCIpO1xuICAgICAgICB0aGlzLmdhbWVNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1tZXNzYWdlLXRleHRcIik7XG4gICAgICAgIHRoaXMuZGlmZmljdWx0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhyZWUtd2F5LWJ0blwiKTtcbiAgICAgICAgdGhpcy5lYXN5QnRuID0gdGhpcy5kaWZmaWN1bHR5QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWVhc3lcIik7XG4gICAgICAgIHRoaXMubWVkaXVtQnRuID0gdGhpcy5kaWZmaWN1bHR5QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1lZGl1bVwiKTtcbiAgICAgICAgdGhpcy5oYXJkQnRuID0gdGhpcy5kaWZmaWN1bHR5QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWhhcmRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiQ1BVXCIsIHN5bWJvbCA9IFwiT1wiKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=