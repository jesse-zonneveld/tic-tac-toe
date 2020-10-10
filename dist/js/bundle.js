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
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/game */ "./src/js/components/game.js");

var game = new _components_game__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/js/components/game.js":
/*!***********************************!*\
  !*** ./src/js/components/game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.gameContainer = document.querySelector(".game");
    this.startBtn = document.querySelector(".btn-start");
    this.newGameBtn = document.querySelector(".btn-new-game");
    this.newPlayersBtn = document.querySelector(".btn-new-players");
    this.scoreBoard = document.querySelector(".score-board");
    this.gameMessageText = document.querySelector(".game-message-text");
    this.gameStatus = "playing";
    this.winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    this.events();
  }

  _createClass(Game, [{
    key: "events",
    value: function events() {
      this.startBtn.addEventListener("click", this.initializeGame.bind(this));
      this.newGameBtn.addEventListener("click", this.startNewGame.bind(this));
      this.newPlayersBtn.addEventListener("click", this.restartWithNewPlayers.bind(this));
    } //METHODS

  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.setNewPlayers();
      this.startBtn.classList.add("hide");
      this.whoWentFirstLastGame = this.playerTwo;
      this.makeAndRevealBoard();
      this.setAndRevealScoreBoard();
      this.updateCurrentPlayer(true);
    }
  }, {
    key: "makeAndRevealBoard",
    value: function makeAndRevealBoard() {
      for (var i = 0; i < 9; i++) {
        var newSquare = document.createElement("div");
        newSquare.classList.add("game-square");
        newSquare.classList.add("unmarked");
        newSquare.dataset.index = i;
        newSquare.addEventListener("click", this.handlePlayerClick.bind(this));
        this.gameContainer.appendChild(newSquare);
      }

      this.gameContainer.classList.add("reveal");
      this.gameSquares = document.querySelectorAll(".game-square");
    }
  }, {
    key: "handlePlayerClick",
    value: function handlePlayerClick(e) {
      if (this.isGameOver()) return;
      var square = e.currentTarget;
      if (!square.classList.contains("unmarked")) return;
      square.classList.remove("unmarked");
      square.innerHTML = this.currentPlayer.symbol;

      if (this.checkForWin()) {
        this.dealWithWin();
      } else {
        this.updateCurrentPlayer();
      }
    }
  }, {
    key: "isGameOver",
    value: function isGameOver() {
      return this.gameStatus == "over";
    }
  }, {
    key: "updateCurrentPlayer",
    value: function updateCurrentPlayer() {
      var firstTurn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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

        this.gameMessageText.innerHTML = "".concat(this.currentPlayer.name, " goes first.");
      } else {
        if (this.currentPlayer == this.playerOne) {
          this.currentPlayer = this.playerTwo;
          this.scoreBoard.classList.add("player-two-turn");
        } else {
          this.currentPlayer = this.playerOne;
          this.scoreBoard.classList.remove("player-two-turn");
        }

        this.gameMessageText.innerHTML = "".concat(this.currentPlayer.name, "'s turn.");
      }
    }
  }, {
    key: "checkForWin",
    value: function checkForWin() {
      var _this = this;

      // console.log("inside CheckForWin--------------------------------");
      return this.winningConditions.some(function (condition) {
        var firstSymbol = _this.gameSquares[condition[0]].innerHTML; // console.log(
        //     `inside winningConditions loop ${condition}, ${firstSymbol}`
        // );

        var isWin = condition.every(function (i) {
          // console.log(`inside everyCheck loop ${i}`);
          if (firstSymbol == "") return false; // console.log(this.gameSquares[i].innerHTML == firstSymbol);

          return _this.gameSquares[i].innerHTML == firstSymbol;
        });

        if (isWin) {
          _this.winningCondition = condition;
        }

        return isWin;
      });
    }
  }, {
    key: "dealWithWin",
    value: function dealWithWin() {
      var _this2 = this;

      this.gameStatus = "over";
      this.currentPlayer.score++;
      this.scoreBoard.classList.add("win");
      this.winningCondition.forEach(function (i) {
        _this2.gameSquares[i].classList.add("highlight");
      });
      this.gameSquares.forEach(function (square) {
        square.classList.remove("unmarked");
      });
      this.gameMessageText.innerHTML = "".concat(this.currentPlayer.name, " wins!");
      this.gameMessageText.classList.add("bigger");
      this.updateScoreBoard();
    }
  }, {
    key: "setAndRevealScoreBoard",
    value: function setAndRevealScoreBoard() {
      this.scoreBoard.querySelector(".score-board__symbol-one").innerHTML = this.playerOne.symbol;
      this.scoreBoard.querySelector(".score-board__symbol-two").innerHTML = this.playerTwo.symbol;
      this.scoreBoard.querySelector(".score-board__name-one").innerHTML = this.playerOne.name;
      this.scoreBoard.querySelector(".score-board__name-two").innerHTML = this.playerTwo.name;
      this.scoreBoard.querySelector(".score-board__score-one").innerHTML = this.playerOne.score;
      this.scoreBoard.querySelector(".score-board__score-two").innerHTML = this.playerTwo.score;
      document.querySelector(".game-info").classList.add("reveal");
    }
  }, {
    key: "updateScoreBoard",
    value: function updateScoreBoard() {
      this.scoreBoard.querySelector(".score-board__score-one").innerHTML = this.playerOne.score;
      this.scoreBoard.querySelector(".score-board__score-two").innerHTML = this.playerTwo.score;
    }
  }, {
    key: "startNewGame",
    value: function startNewGame() {
      this.scoreBoard.classList.remove("win");
      this.gameStatus = "playing";
      this.resetBoard();
      this.updateCurrentPlayer(true);
      this.gameMessageText.classList.remove("bigger");
    }
  }, {
    key: "resetBoard",
    value: function resetBoard() {
      this.gameSquares.forEach(function (square) {
        square.classList.add("unmarked");
        square.classList.remove("highlight");
        square.innerHTML = "";
      });
    }
  }, {
    key: "restartWithNewPlayers",
    value: function restartWithNewPlayers() {
      this.setNewPlayers();
      this.setAndRevealScoreBoard();
      this.startNewGame();
    }
  }, {
    key: "setNewPlayers",
    value: function setNewPlayers() {
      this.playerOne = {
        name: prompt("Insert Player One's name: ", "Player One"),
        symbol: "X",
        score: 0
      };
      this.playerTwo = {
        name: prompt("Insert Player Two's name: ", "Player Two"),
        symbol: "O",
        score: 0
      };
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nYW1lLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJHYW1lIiwiZ2FtZUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0QnRuIiwibmV3R2FtZUJ0biIsIm5ld1BsYXllcnNCdG4iLCJzY29yZUJvYXJkIiwiZ2FtZU1lc3NhZ2VUZXh0IiwiZ2FtZVN0YXR1cyIsIndpbm5pbmdDb25kaXRpb25zIiwiZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemVHYW1lIiwiYmluZCIsInN0YXJ0TmV3R2FtZSIsInJlc3RhcnRXaXRoTmV3UGxheWVycyIsInNldE5ld1BsYXllcnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aG9XZW50Rmlyc3RMYXN0R2FtZSIsInBsYXllclR3byIsIm1ha2VBbmRSZXZlYWxCb2FyZCIsInNldEFuZFJldmVhbFNjb3JlQm9hcmQiLCJ1cGRhdGVDdXJyZW50UGxheWVyIiwiaSIsIm5ld1NxdWFyZSIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiaW5kZXgiLCJoYW5kbGVQbGF5ZXJDbGljayIsImFwcGVuZENoaWxkIiwiZ2FtZVNxdWFyZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsImlzR2FtZU92ZXIiLCJzcXVhcmUiLCJjdXJyZW50VGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJjdXJyZW50UGxheWVyIiwic3ltYm9sIiwiY2hlY2tGb3JXaW4iLCJkZWFsV2l0aFdpbiIsImZpcnN0VHVybiIsInBsYXllck9uZSIsIm5hbWUiLCJzb21lIiwiY29uZGl0aW9uIiwiZmlyc3RTeW1ib2wiLCJpc1dpbiIsImV2ZXJ5Iiwid2lubmluZ0NvbmRpdGlvbiIsInNjb3JlIiwiZm9yRWFjaCIsInVwZGF0ZVNjb3Jl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QWlDLEtBQWpDO0FBQ0EsV0FBSzlCLFVBQUwsR0FBa0IsU0FBbEI7QUFDQSxXQUFLZ0QsVUFBTDtBQUNBLFdBQUtqQyxtQkFBTCxDQUF5QixJQUF6QjtBQUNBLFdBQUtoQixlQUFMLENBQXFCVSxTQUFyQixDQUErQnFCLE1BQS9CLENBQXNDLFFBQXRDO0FBQ0g7OztpQ0FFWTtBQUNULFdBQUtQLFdBQUwsQ0FBaUJ1QixPQUFqQixDQUF5QixVQUFDbkIsTUFBRCxFQUFZO0FBQ2pDQSxjQUFNLENBQUNsQixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixVQUFyQjtBQUNBaUIsY0FBTSxDQUFDbEIsU0FBUCxDQUFpQnFCLE1BQWpCLENBQXdCLFdBQXhCO0FBQ0FILGNBQU0sQ0FBQ0ksU0FBUCxHQUFtQixFQUFuQjtBQUNILE9BSkQ7QUFLSDs7OzRDQUV1QjtBQUNwQixXQUFLdkIsYUFBTDtBQUNBLFdBQUtNLHNCQUFMO0FBQ0EsV0FBS1IsWUFBTDtBQUNIOzs7b0NBRWU7QUFDWixXQUFLK0IsU0FBTCxHQUFpQjtBQUNiQyxZQUFJLEVBQUVXLE1BQU0sQ0FBQyw0QkFBRCxFQUErQixZQUEvQixDQURDO0FBRWJoQixjQUFNLEVBQUUsR0FGSztBQUdiWSxhQUFLLEVBQUU7QUFITSxPQUFqQjtBQUtBLFdBQUtqQyxTQUFMLEdBQWlCO0FBQ2IwQixZQUFJLEVBQUVXLE1BQU0sQ0FBQyw0QkFBRCxFQUErQixZQUEvQixDQURDO0FBRWJoQixjQUFNLEVBQUUsR0FGSztBQUdiWSxhQUFLLEVBQUU7QUFITSxPQUFqQjtBQUtIOzs7Ozs7QUFHVXRELG1FQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lXCI7XG5cbmxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiIsImNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVcIik7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zdGFydFwiKTtcbiAgICAgICAgdGhpcy5uZXdHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbmV3LWdhbWVcIik7XG4gICAgICAgIHRoaXMubmV3UGxheWVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW5ldy1wbGF5ZXJzXCIpO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLWJvYXJkXCIpO1xuICAgICAgICB0aGlzLmdhbWVNZXNzYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1tZXNzYWdlLXRleHRcIik7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IFwicGxheWluZ1wiO1xuICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25zID0gW1xuICAgICAgICAgICAgWzAsIDEsIDJdLFxuICAgICAgICAgICAgWzMsIDQsIDVdLFxuICAgICAgICAgICAgWzYsIDcsIDhdLFxuICAgICAgICAgICAgWzAsIDMsIDZdLFxuICAgICAgICAgICAgWzEsIDQsIDddLFxuICAgICAgICAgICAgWzIsIDUsIDhdLFxuICAgICAgICAgICAgWzAsIDQsIDhdLFxuICAgICAgICAgICAgWzIsIDQsIDZdLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cblxuICAgIGV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5pbml0aWFsaXplR2FtZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5uZXdHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnN0YXJ0TmV3R2FtZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5uZXdQbGF5ZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRXaXRoTmV3UGxheWVycy5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy9NRVRIT0RTXG4gICAgaW5pdGlhbGl6ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMuc2V0TmV3UGxheWVycygpO1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICB0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID0gdGhpcy5wbGF5ZXJUd287XG5cbiAgICAgICAgdGhpcy5tYWtlQW5kUmV2ZWFsQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zZXRBbmRSZXZlYWxTY29yZUJvYXJkKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFBsYXllcih0cnVlKTtcbiAgICB9XG5cbiAgICBtYWtlQW5kUmV2ZWFsQm9hcmQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLXNxdWFyZVwiKTtcbiAgICAgICAgICAgIG5ld1NxdWFyZS5jbGFzc0xpc3QuYWRkKFwidW5tYXJrZWRcIik7XG4gICAgICAgICAgICBuZXdTcXVhcmUuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgICAgICAgICBuZXdTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJDbGljay5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1NxdWFyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XG4gICAgICAgIHRoaXMuZ2FtZVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWUtc3F1YXJlXCIpO1xuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcigpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKCFzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5tYXJrZWRcIikpIHJldHVybjtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bm1hcmtlZFwiKTtcbiAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IHRoaXMuY3VycmVudFBsYXllci5zeW1ib2w7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrRm9yV2luKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhbFdpdGhXaW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFBsYXllcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNHYW1lT3ZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZVN0YXR1cyA9PSBcIm92ZXJcIjtcbiAgICB9XG5cbiAgICB1cGRhdGVDdXJyZW50UGxheWVyKGZpcnN0VHVybiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXJzdFR1cm4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID09IHRoaXMucGxheWVyT25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJUd287XG4gICAgICAgICAgICAgICAgdGhpcy53aG9XZW50Rmlyc3RMYXN0R2FtZSA9IHRoaXMucGxheWVyVHdvO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXR3by10dXJuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllck9uZTtcbiAgICAgICAgICAgICAgICB0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID0gdGhpcy5wbGF5ZXJPbmU7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwbGF5ZXItdHdvLXR1cm5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVNZXNzYWdlVGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZX0gZ29lcyBmaXJzdC5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PSB0aGlzLnBsYXllck9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyVHdvO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXR3by10dXJuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllck9uZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXllci10d28tdHVyblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZU1lc3NhZ2VUZXh0LmlubmVySFRNTCA9IGAke3RoaXMuY3VycmVudFBsYXllci5uYW1lfSdzIHR1cm4uYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRm9yV2luKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2lkZSBDaGVja0Zvcldpbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy53aW5uaW5nQ29uZGl0aW9ucy5zb21lKChjb25kaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U3ltYm9sID0gdGhpcy5nYW1lU3F1YXJlc1tjb25kaXRpb25bMF1dLmlubmVySFRNTDtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgICAgICAvLyAgICAgYGluc2lkZSB3aW5uaW5nQ29uZGl0aW9ucyBsb29wICR7Y29uZGl0aW9ufSwgJHtmaXJzdFN5bWJvbH1gXG4gICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgY29uc3QgaXNXaW4gPSBjb25kaXRpb24uZXZlcnkoKGkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgaW5zaWRlIGV2ZXJ5Q2hlY2sgbG9vcCAke2l9YCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RTeW1ib2wgPT0gXCJcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2FtZVNxdWFyZXNbaV0uaW5uZXJIVE1MID09IGZpcnN0U3ltYm9sKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nYW1lU3F1YXJlc1tpXS5pbm5lckhUTUwgPT0gZmlyc3RTeW1ib2w7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5uaW5nQ29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaXNXaW47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlYWxXaXRoV2luKCkge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBcIm92ZXJcIjtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNjb3JlKys7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5jbGFzc0xpc3QuYWRkKFwid2luXCIpO1xuICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb24uZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3F1YXJlc1tpXS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwidW5tYXJrZWRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVNZXNzYWdlVGV4dC5pbm5lckhUTUwgPSBgJHt0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZX0gd2lucyFgO1xuICAgICAgICB0aGlzLmdhbWVNZXNzYWdlVGV4dC5jbGFzc0xpc3QuYWRkKFwiYmlnZ2VyXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlQm9hcmQoKTtcbiAgICB9XG5cbiAgICBzZXRBbmRSZXZlYWxTY29yZUJvYXJkKCkge1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zeW1ib2wtb25lXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllck9uZS5zeW1ib2w7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3N5bWJvbC10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLnN5bWJvbDtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fbmFtZS1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLm5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX25hbWUtdHdvXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllclR3by5uYW1lO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLnNjb3JlO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLnNjb3JlO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1pbmZvXCIpLmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NvcmVCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc2NvcmUtb25lXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllck9uZS5zY29yZTtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc2NvcmUtdHdvXCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSB0aGlzLnBsYXllclR3by5zY29yZTtcbiAgICB9XG5cbiAgICBzdGFydE5ld0dhbWUoKSB7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwid2luXCIpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBcInBsYXlpbmdcIjtcbiAgICAgICAgdGhpcy5yZXNldEJvYXJkKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFBsYXllcih0cnVlKTtcbiAgICAgICAgdGhpcy5nYW1lTWVzc2FnZVRleHQuY2xhc3NMaXN0LnJlbW92ZShcImJpZ2dlclwiKTtcbiAgICB9XG5cbiAgICByZXNldEJvYXJkKCkge1xuICAgICAgICB0aGlzLmdhbWVTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ1bm1hcmtlZFwiKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RhcnRXaXRoTmV3UGxheWVycygpIHtcbiAgICAgICAgdGhpcy5zZXROZXdQbGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuc2V0QW5kUmV2ZWFsU2NvcmVCb2FyZCgpO1xuICAgICAgICB0aGlzLnN0YXJ0TmV3R2FtZSgpO1xuICAgIH1cblxuICAgIHNldE5ld1BsYXllcnMoKSB7XG4gICAgICAgIHRoaXMucGxheWVyT25lID0ge1xuICAgICAgICAgICAgbmFtZTogcHJvbXB0KFwiSW5zZXJ0IFBsYXllciBPbmUncyBuYW1lOiBcIiwgXCJQbGF5ZXIgT25lXCIpLFxuICAgICAgICAgICAgc3ltYm9sOiBcIlhcIixcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBsYXllclR3byA9IHtcbiAgICAgICAgICAgIG5hbWU6IHByb21wdChcIkluc2VydCBQbGF5ZXIgVHdvJ3MgbmFtZTogXCIsIFwiUGxheWVyIFR3b1wiKSxcbiAgICAgICAgICAgIHN5bWJvbDogXCJPXCIsXG4gICAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9