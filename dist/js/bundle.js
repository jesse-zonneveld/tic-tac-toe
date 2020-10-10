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

      return this.winningConditions.some(function (condition) {
        var firstSymbol = _this.gameSquares[condition[0]].innerHTML;
        var isWin = condition.every(function (i) {
          if (firstSymbol == "") return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nYW1lLmpzIl0sIm5hbWVzIjpbImdhbWUiLCJHYW1lIiwiZ2FtZUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0QnRuIiwibmV3R2FtZUJ0biIsIm5ld1BsYXllcnNCdG4iLCJzY29yZUJvYXJkIiwiZ2FtZU1lc3NhZ2VUZXh0IiwiZ2FtZVN0YXR1cyIsIndpbm5pbmdDb25kaXRpb25zIiwiZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemVHYW1lIiwiYmluZCIsInN0YXJ0TmV3R2FtZSIsInJlc3RhcnRXaXRoTmV3UGxheWVycyIsInNldE5ld1BsYXllcnMiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aG9XZW50Rmlyc3RMYXN0R2FtZSIsInBsYXllclR3byIsIm1ha2VBbmRSZXZlYWxCb2FyZCIsInNldEFuZFJldmVhbFNjb3JlQm9hcmQiLCJ1cGRhdGVDdXJyZW50UGxheWVyIiwiaSIsIm5ld1NxdWFyZSIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiaW5kZXgiLCJoYW5kbGVQbGF5ZXJDbGljayIsImFwcGVuZENoaWxkIiwiZ2FtZVNxdWFyZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsImlzR2FtZU92ZXIiLCJzcXVhcmUiLCJjdXJyZW50VGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJjdXJyZW50UGxheWVyIiwic3ltYm9sIiwiY2hlY2tGb3JXaW4iLCJkZWFsV2l0aFdpbiIsImZpcnN0VHVybiIsInBsYXllck9uZSIsIm5hbWUiLCJzb21lIiwiY29uZGl0aW9uIiwiZmlyc3RTeW1ib2wiLCJpc1dpbiIsImV2ZXJ5Iiwid2lubmluZ0NvbmRpdGlvbiIsInNjb3JlIiwiZm9yRWFjaCIsInVwZGF0ZVNjb3JlQm9hcmQiLCJyZXNldEJvYXJkIiwicHJvbXB0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBLElBQUlBLElBQUksR0FBRyxJQUFJQyx3REFBSixFQUFYLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGTUEsSTtBQUNGLGtCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQXJCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsU0FBS0csYUFBTCxHQUFxQkosUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFyQjtBQUNBLFNBQUtJLFVBQUwsR0FBa0JMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFsQjtBQUNBLFNBQUtLLGVBQUwsR0FBdUJOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdkI7QUFDQSxTQUFLTSxVQUFMLEdBQWtCLFNBQWxCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsQ0FDckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEcUIsRUFFckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGcUIsRUFHckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FIcUIsRUFJckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKcUIsRUFLckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMcUIsRUFNckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FOcUIsRUFPckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FQcUIsRUFRckIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FScUIsQ0FBekI7QUFVQSxTQUFLQyxNQUFMO0FBQ0g7Ozs7NkJBRVE7QUFDTCxXQUFLUCxRQUFMLENBQWNRLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXhDO0FBQ0EsV0FBS1QsVUFBTCxDQUFnQk8sZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLEtBQUtHLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQTFDO0FBQ0EsV0FBS1IsYUFBTCxDQUFtQk0sZ0JBQW5CLENBQ0ksT0FESixFQUVJLEtBQUtJLHFCQUFMLENBQTJCRixJQUEzQixDQUFnQyxJQUFoQyxDQUZKO0FBSUgsSyxDQUVEOzs7O3FDQUNpQjtBQUNiLFdBQUtHLGFBQUw7QUFDQSxXQUFLYixRQUFMLENBQWNjLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCO0FBQ0EsV0FBS0Msb0JBQUwsR0FBNEIsS0FBS0MsU0FBakM7QUFFQSxXQUFLQyxrQkFBTDtBQUNBLFdBQUtDLHNCQUFMO0FBQ0EsV0FBS0MsbUJBQUwsQ0FBeUIsSUFBekI7QUFDSDs7O3lDQUVvQjtBQUNqQixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsWUFBTUMsU0FBUyxHQUFHeEIsUUFBUSxDQUFDeUIsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRCxpQkFBUyxDQUFDUixTQUFWLENBQW9CQyxHQUFwQixDQUF3QixhQUF4QjtBQUNBTyxpQkFBUyxDQUFDUixTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUF4QjtBQUNBTyxpQkFBUyxDQUFDRSxPQUFWLENBQWtCQyxLQUFsQixHQUEwQkosQ0FBMUI7QUFDQUMsaUJBQVMsQ0FBQ2QsZ0JBQVYsQ0FDSSxPQURKLEVBRUksS0FBS2tCLGlCQUFMLENBQXVCaEIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FGSjtBQUlBLGFBQUtiLGFBQUwsQ0FBbUI4QixXQUFuQixDQUErQkwsU0FBL0I7QUFDSDs7QUFDRCxXQUFLekIsYUFBTCxDQUFtQmlCLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyxRQUFqQztBQUNBLFdBQUthLFdBQUwsR0FBbUI5QixRQUFRLENBQUMrQixnQkFBVCxDQUEwQixjQUExQixDQUFuQjtBQUNIOzs7c0NBRWlCQyxDLEVBQUc7QUFDakIsVUFBSSxLQUFLQyxVQUFMLEVBQUosRUFBdUI7QUFDdkIsVUFBTUMsTUFBTSxHQUFHRixDQUFDLENBQUNHLGFBQWpCO0FBQ0EsVUFBSSxDQUFDRCxNQUFNLENBQUNsQixTQUFQLENBQWlCb0IsUUFBakIsQ0FBMEIsVUFBMUIsQ0FBTCxFQUE0QztBQUM1Q0YsWUFBTSxDQUFDbEIsU0FBUCxDQUFpQnFCLE1BQWpCLENBQXdCLFVBQXhCO0FBQ0FILFlBQU0sQ0FBQ0ksU0FBUCxHQUFtQixLQUFLQyxhQUFMLENBQW1CQyxNQUF0Qzs7QUFDQSxVQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUNwQixhQUFLQyxXQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS3BCLG1CQUFMO0FBQ0g7QUFDSjs7O2lDQUVZO0FBQ1QsYUFBTyxLQUFLZixVQUFMLElBQW1CLE1BQTFCO0FBQ0g7OzswQ0FFc0M7QUFBQSxVQUFuQm9DLFNBQW1CLHVFQUFQLEtBQU87O0FBQ25DLFVBQUlBLFNBQUosRUFBZTtBQUNYLFlBQUksS0FBS3pCLG9CQUFMLElBQTZCLEtBQUswQixTQUF0QyxFQUFpRDtBQUM3QyxlQUFLTCxhQUFMLEdBQXFCLEtBQUtwQixTQUExQjtBQUNBLGVBQUtELG9CQUFMLEdBQTRCLEtBQUtDLFNBQWpDO0FBQ0EsZUFBS2QsVUFBTCxDQUFnQlcsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGlCQUE5QjtBQUNILFNBSkQsTUFJTztBQUNILGVBQUtzQixhQUFMLEdBQXFCLEtBQUtLLFNBQTFCO0FBQ0EsZUFBSzFCLG9CQUFMLEdBQTRCLEtBQUswQixTQUFqQztBQUNBLGVBQUt2QyxVQUFMLENBQWdCVyxTQUFoQixDQUEwQnFCLE1BQTFCLENBQWlDLGlCQUFqQztBQUNIOztBQUNELGFBQUsvQixlQUFMLENBQXFCZ0MsU0FBckIsYUFBb0MsS0FBS0MsYUFBTCxDQUFtQk0sSUFBdkQ7QUFDSCxPQVhELE1BV087QUFDSCxZQUFJLEtBQUtOLGFBQUwsSUFBc0IsS0FBS0ssU0FBL0IsRUFBMEM7QUFDdEMsZUFBS0wsYUFBTCxHQUFxQixLQUFLcEIsU0FBMUI7QUFDQSxlQUFLZCxVQUFMLENBQWdCVyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsaUJBQTlCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsZUFBS3NCLGFBQUwsR0FBcUIsS0FBS0ssU0FBMUI7QUFDQSxlQUFLdkMsVUFBTCxDQUFnQlcsU0FBaEIsQ0FBMEJxQixNQUExQixDQUFpQyxpQkFBakM7QUFDSDs7QUFDRCxhQUFLL0IsZUFBTCxDQUFxQmdDLFNBQXJCLGFBQW9DLEtBQUtDLGFBQUwsQ0FBbUJNLElBQXZEO0FBQ0g7QUFDSjs7O2tDQUVhO0FBQUE7O0FBQ1YsYUFBTyxLQUFLckMsaUJBQUwsQ0FBdUJzQyxJQUF2QixDQUE0QixVQUFDQyxTQUFELEVBQWU7QUFDOUMsWUFBTUMsV0FBVyxHQUFHLEtBQUksQ0FBQ2xCLFdBQUwsQ0FBaUJpQixTQUFTLENBQUMsQ0FBRCxDQUExQixFQUErQlQsU0FBbkQ7QUFDQSxZQUFNVyxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixVQUFDM0IsQ0FBRCxFQUFPO0FBQ2pDLGNBQUl5QixXQUFXLElBQUksRUFBbkIsRUFBdUIsT0FBTyxLQUFQO0FBQ3ZCLGlCQUFPLEtBQUksQ0FBQ2xCLFdBQUwsQ0FBaUJQLENBQWpCLEVBQW9CZSxTQUFwQixJQUFpQ1UsV0FBeEM7QUFDSCxTQUhhLENBQWQ7O0FBS0EsWUFBSUMsS0FBSixFQUFXO0FBQ1AsZUFBSSxDQUFDRSxnQkFBTCxHQUF3QkosU0FBeEI7QUFDSDs7QUFFRCxlQUFPRSxLQUFQO0FBQ0gsT0FaTSxDQUFQO0FBYUg7OztrQ0FFYTtBQUFBOztBQUNWLFdBQUsxQyxVQUFMLEdBQWtCLE1BQWxCO0FBQ0EsV0FBS2dDLGFBQUwsQ0FBbUJhLEtBQW5CO0FBQ0EsV0FBSy9DLFVBQUwsQ0FBZ0JXLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixLQUE5QjtBQUNBLFdBQUtrQyxnQkFBTCxDQUFzQkUsT0FBdEIsQ0FBOEIsVUFBQzlCLENBQUQsRUFBTztBQUNqQyxjQUFJLENBQUNPLFdBQUwsQ0FBaUJQLENBQWpCLEVBQW9CUCxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsV0FBbEM7QUFDSCxPQUZEO0FBR0EsV0FBS2EsV0FBTCxDQUFpQnVCLE9BQWpCLENBQXlCLFVBQUNuQixNQUFELEVBQVk7QUFDakNBLGNBQU0sQ0FBQ2xCLFNBQVAsQ0FBaUJxQixNQUFqQixDQUF3QixVQUF4QjtBQUNILE9BRkQ7QUFHQSxXQUFLL0IsZUFBTCxDQUFxQmdDLFNBQXJCLGFBQW9DLEtBQUtDLGFBQUwsQ0FBbUJNLElBQXZEO0FBQ0EsV0FBS3ZDLGVBQUwsQ0FBcUJVLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQztBQUNBLFdBQUtxQyxnQkFBTDtBQUNIOzs7NkNBRXdCO0FBQ3JCLFdBQUtqRCxVQUFMLENBQWdCSixhQUFoQixDQUNJLDBCQURKLEVBRUVxQyxTQUZGLEdBRWMsS0FBS00sU0FBTCxDQUFlSixNQUY3QjtBQUdBLFdBQUtuQyxVQUFMLENBQWdCSixhQUFoQixDQUNJLDBCQURKLEVBRUVxQyxTQUZGLEdBRWMsS0FBS25CLFNBQUwsQ0FBZXFCLE1BRjdCO0FBR0EsV0FBS25DLFVBQUwsQ0FBZ0JKLGFBQWhCLENBQ0ksd0JBREosRUFFRXFDLFNBRkYsR0FFYyxLQUFLTSxTQUFMLENBQWVDLElBRjdCO0FBR0EsV0FBS3hDLFVBQUwsQ0FBZ0JKLGFBQWhCLENBQ0ksd0JBREosRUFFRXFDLFNBRkYsR0FFYyxLQUFLbkIsU0FBTCxDQUFlMEIsSUFGN0I7QUFHQSxXQUFLeEMsVUFBTCxDQUFnQkosYUFBaEIsQ0FDSSx5QkFESixFQUVFcUMsU0FGRixHQUVjLEtBQUtNLFNBQUwsQ0FBZVEsS0FGN0I7QUFHQSxXQUFLL0MsVUFBTCxDQUFnQkosYUFBaEIsQ0FDSSx5QkFESixFQUVFcUMsU0FGRixHQUVjLEtBQUtuQixTQUFMLENBQWVpQyxLQUY3QjtBQUlBcEQsY0FBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDZSxTQUFyQyxDQUErQ0MsR0FBL0MsQ0FBbUQsUUFBbkQ7QUFDSDs7O3VDQUVrQjtBQUNmLFdBQUtaLFVBQUwsQ0FBZ0JKLGFBQWhCLENBQ0kseUJBREosRUFFRXFDLFNBRkYsR0FFYyxLQUFLTSxTQUFMLENBQWVRLEtBRjdCO0FBR0EsV0FBSy9DLFVBQUwsQ0FBZ0JKLGFBQWhCLENBQ0kseUJBREosRUFFRXFDLFNBRkYsR0FFYyxLQUFLbkIsU0FBTCxDQUFlaUMsS0FGN0I7QUFHSDs7O21DQUVjO0FBQ1gsV0FBSy9DLFVBQUwsQ0FBZ0JXLFNBQWhCLENBQTBCcUIsTUFBMUIsQ0FBaUMsS0FBakM7QUFDQSxXQUFLOUIsVUFBTCxHQUFrQixTQUFsQjtBQUNBLFdBQUtnRCxVQUFMO0FBQ0EsV0FBS2pDLG1CQUFMLENBQXlCLElBQXpCO0FBQ0EsV0FBS2hCLGVBQUwsQ0FBcUJVLFNBQXJCLENBQStCcUIsTUFBL0IsQ0FBc0MsUUFBdEM7QUFDSDs7O2lDQUVZO0FBQ1QsV0FBS1AsV0FBTCxDQUFpQnVCLE9BQWpCLENBQXlCLFVBQUNuQixNQUFELEVBQVk7QUFDakNBLGNBQU0sQ0FBQ2xCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCO0FBQ0FpQixjQUFNLENBQUNsQixTQUFQLENBQWlCcUIsTUFBakIsQ0FBd0IsV0FBeEI7QUFDQUgsY0FBTSxDQUFDSSxTQUFQLEdBQW1CLEVBQW5CO0FBQ0gsT0FKRDtBQUtIOzs7NENBRXVCO0FBQ3BCLFdBQUt2QixhQUFMO0FBQ0EsV0FBS00sc0JBQUw7QUFDQSxXQUFLUixZQUFMO0FBQ0g7OztvQ0FFZTtBQUNaLFdBQUsrQixTQUFMLEdBQWlCO0FBQ2JDLFlBQUksRUFBRVcsTUFBTSxDQUFDLDRCQUFELEVBQStCLFlBQS9CLENBREM7QUFFYmhCLGNBQU0sRUFBRSxHQUZLO0FBR2JZLGFBQUssRUFBRTtBQUhNLE9BQWpCO0FBS0EsV0FBS2pDLFNBQUwsR0FBaUI7QUFDYjBCLFlBQUksRUFBRVcsTUFBTSxDQUFDLDRCQUFELEVBQStCLFlBQS9CLENBREM7QUFFYmhCLGNBQU0sRUFBRSxHQUZLO0FBR2JZLGFBQUssRUFBRTtBQUhNLE9BQWpCO0FBS0g7Ozs7OztBQUdVdEQsbUVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVcIjtcblxubGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuIiwiY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZVwiKTtcbiAgICAgICAgdGhpcy5zdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXN0YXJ0XCIpO1xuICAgICAgICB0aGlzLm5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1uZXctZ2FtZVwiKTtcbiAgICAgICAgdGhpcy5uZXdQbGF5ZXJzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbmV3LXBsYXllcnNcIik7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtYm9hcmRcIik7XG4gICAgICAgIHRoaXMuZ2FtZU1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW1lc3NhZ2UtdGV4dFwiKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gXCJwbGF5aW5nXCI7XG4gICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbnMgPSBbXG4gICAgICAgICAgICBbMCwgMSwgMl0sXG4gICAgICAgICAgICBbMywgNCwgNV0sXG4gICAgICAgICAgICBbNiwgNywgOF0sXG4gICAgICAgICAgICBbMCwgMywgNl0sXG4gICAgICAgICAgICBbMSwgNCwgN10sXG4gICAgICAgICAgICBbMiwgNSwgOF0sXG4gICAgICAgICAgICBbMCwgNCwgOF0sXG4gICAgICAgICAgICBbMiwgNCwgNl0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICB0aGlzLnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmluaXRpYWxpemVHYW1lLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3RhcnROZXdHYW1lLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5ld1BsYXllcnNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFdpdGhOZXdQbGF5ZXJzLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL01FVEhPRFNcbiAgICBpbml0aWFsaXplR2FtZSgpIHtcbiAgICAgICAgdGhpcy5zZXROZXdQbGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHRoaXMud2hvV2VudEZpcnN0TGFzdEdhbWUgPSB0aGlzLnBsYXllclR3bztcblxuICAgICAgICB0aGlzLm1ha2VBbmRSZXZlYWxCb2FyZCgpO1xuICAgICAgICB0aGlzLnNldEFuZFJldmVhbFNjb3JlQm9hcmQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKHRydWUpO1xuICAgIH1cblxuICAgIG1ha2VBbmRSZXZlYWxCb2FyZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdTcXVhcmUuY2xhc3NMaXN0LmFkZChcImdhbWUtc3F1YXJlXCIpO1xuICAgICAgICAgICAgbmV3U3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ1bm1hcmtlZFwiKTtcbiAgICAgICAgICAgIG5ld1NxdWFyZS5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgICAgICAgIG5ld1NxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBsYXllckNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3U3F1YXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJldmVhbFwiKTtcbiAgICAgICAgdGhpcy5nYW1lU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FtZS1zcXVhcmVcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyQ2xpY2soZSkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKCkpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZiAoIXNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bm1hcmtlZFwiKSkgcmV0dXJuO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInVubWFya2VkXCIpO1xuICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gdGhpcy5jdXJyZW50UGxheWVyLnN5bWJvbDtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGb3JXaW4oKSkge1xuICAgICAgICAgICAgdGhpcy5kZWFsV2l0aFdpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lU3RhdHVzID09IFwib3ZlclwiO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRQbGF5ZXIoZmlyc3RUdXJuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpcnN0VHVybikge1xuICAgICAgICAgICAgaWYgKHRoaXMud2hvV2VudEZpcnN0TGFzdEdhbWUgPT0gdGhpcy5wbGF5ZXJPbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllclR3bztcbiAgICAgICAgICAgICAgICB0aGlzLndob1dlbnRGaXJzdExhc3RHYW1lID0gdGhpcy5wbGF5ZXJUd287XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItdHdvLXR1cm5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyT25lO1xuICAgICAgICAgICAgICAgIHRoaXMud2hvV2VudEZpcnN0TGFzdEdhbWUgPSB0aGlzLnBsYXllck9uZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlQm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcInBsYXllci10d28tdHVyblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZU1lc3NhZ2VUZXh0LmlubmVySFRNTCA9IGAke3RoaXMuY3VycmVudFBsYXllci5uYW1lfSBnb2VzIGZpcnN0LmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09IHRoaXMucGxheWVyT25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJUd287XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItdHdvLXR1cm5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyT25lO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwicGxheWVyLXR3by10dXJuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYW1lTWVzc2FnZVRleHQuaW5uZXJIVE1MID0gYCR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9J3MgdHVybi5gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tGb3JXaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpbm5pbmdDb25kaXRpb25zLnNvbWUoKGNvbmRpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTeW1ib2wgPSB0aGlzLmdhbWVTcXVhcmVzW2NvbmRpdGlvblswXV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3QgaXNXaW4gPSBjb25kaXRpb24uZXZlcnkoKGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RTeW1ib2wgPT0gXCJcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbWVTcXVhcmVzW2ldLmlubmVySFRNTCA9PSBmaXJzdFN5bWJvbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpc1dpbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVhbFdpdGhXaW4oKSB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IFwib3ZlclwiO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc2NvcmUrKztcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJ3aW5cIik7XG4gICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbi5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTcXVhcmVzW2ldLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bm1hcmtlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZU1lc3NhZ2VUZXh0LmlubmVySFRNTCA9IGAke3RoaXMuY3VycmVudFBsYXllci5uYW1lfSB3aW5zIWA7XG4gICAgICAgIHRoaXMuZ2FtZU1lc3NhZ2VUZXh0LmNsYXNzTGlzdC5hZGQoXCJiaWdnZXJcIik7XG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmVCb2FyZCgpO1xuICAgIH1cblxuICAgIHNldEFuZFJldmVhbFNjb3JlQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3N5bWJvbC1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLnN5bWJvbDtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fc3ltYm9sLXR3b1wiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJUd28uc3ltYm9sO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19uYW1lLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUubmFtZTtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi5zY29yZS1ib2FyZF9fbmFtZS10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLm5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3Njb3JlLW9uZVwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJPbmUuc2NvcmU7XG4gICAgICAgIHRoaXMuc2NvcmVCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuc2NvcmUtYm9hcmRfX3Njb3JlLXR3b1wiXG4gICAgICAgICkuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJUd28uc2NvcmU7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWluZm9cIikuY2xhc3NMaXN0LmFkZChcInJldmVhbFwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZUJvYXJkKCkge1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS1vbmVcIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyT25lLnNjb3JlO1xuICAgICAgICB0aGlzLnNjb3JlQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnNjb3JlLWJvYXJkX19zY29yZS10d29cIlxuICAgICAgICApLmlubmVySFRNTCA9IHRoaXMucGxheWVyVHdvLnNjb3JlO1xuICAgIH1cblxuICAgIHN0YXJ0TmV3R2FtZSgpIHtcbiAgICAgICAgdGhpcy5zY29yZUJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJ3aW5cIik7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IFwicGxheWluZ1wiO1xuICAgICAgICB0aGlzLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGxheWVyKHRydWUpO1xuICAgICAgICB0aGlzLmdhbWVNZXNzYWdlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiYmlnZ2VyXCIpO1xuICAgIH1cblxuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInVubWFya2VkXCIpO1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRcIik7XG4gICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdGFydFdpdGhOZXdQbGF5ZXJzKCkge1xuICAgICAgICB0aGlzLnNldE5ld1BsYXllcnMoKTtcbiAgICAgICAgdGhpcy5zZXRBbmRSZXZlYWxTY29yZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc3RhcnROZXdHYW1lKCk7XG4gICAgfVxuXG4gICAgc2V0TmV3UGxheWVycygpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmUgPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm9tcHQoXCJJbnNlcnQgUGxheWVyIE9uZSdzIG5hbWU6IFwiLCBcIlBsYXllciBPbmVcIiksXG4gICAgICAgICAgICBzeW1ib2w6IFwiWFwiLFxuICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGxheWVyVHdvID0ge1xuICAgICAgICAgICAgbmFtZTogcHJvbXB0KFwiSW5zZXJ0IFBsYXllciBUd28ncyBuYW1lOiBcIiwgXCJQbGF5ZXIgVHdvXCIpLFxuICAgICAgICAgICAgc3ltYm9sOiBcIk9cIixcbiAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=