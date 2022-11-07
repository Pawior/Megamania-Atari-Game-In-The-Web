export class Player {
  playerHTML: HTMLDivElement | null;
  constructor() {
    this.playerHTML = null;
  }
  initialize() {
    this.spawnPlayer();
    this.bestMovePlayer();
  }
  spawnPlayer() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    let playerDiv = document.createElement("div");
    playerDiv.id = "player";
    gameBoard.appendChild(playerDiv);
    this.playerHTML = playerDiv;
  }
  movePlayer() {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      console.log(e.key);
      let style = window.getComputedStyle(this.playerHTML);
      let left = parseInt(style.getPropertyValue("left"));
      switch (e.key) {
        case "a":
          console.log("lewo");
          left -= 5;
          console.log(left);
          this.playerHTML.style.left = left + "px";
          break;
        case "d":
          left += 5;
          this.playerHTML.style.left = left + "px";
          console.log("prawo");
          break;
        default:
          console.log("brak ruchu");
          break;
      }
    });
  }
  betterMovePlayer() {
    let keystack: [] = [];
    let prevKey = 0;
    let isMoving = 0;
    let shouldCleaning = false;

    let style = window.getComputedStyle(this.playerHTML);
    let left = parseInt(style.getPropertyValue("left"));
    window.onkeydown = (e) => {
      keystack.push(e.which);
    };

    window.onkeyup = (e) => {
      keystack.pop();
    };

    const draw = () => {
      let key = keystack[keystack.length - 1];
      console.log(keystack);
      // if (!(isMoving == isMoving % 2)) {
      //   key = keystack.pop();
      // } else {
      //   key = prevKey;
      // }

      console.log(shouldCleaning);
      if (key === 65 && left > -200) {
        console.log(left);
        this.playerHTML.style.left = left + "px";
        left -= 5;
        // keystack.pop();
      } //left
      else if (key === 68 && left < 200) {
        console.log(left);
        console.log("prawa");
        this.playerHTML.style.left = left + "px";
        left += 5;
        // keystack.pop();
      } //right

      prevKey = key;
      isMoving++;
    };

    setInterval(() => {
      draw();
    }, 1000 / 24);
  }
  bestMovePlayer() {
    console.log("ds");
    /// store key codes and currently pressed ones
    var keys = {};
    keys.LEFT = 65;
    keys.RIGHT = 68;
    let style = window.getComputedStyle(this.playerHTML);
    let left = parseInt(style.getPropertyValue("left"));

    /// store reference to character's position and element

    /// key detection (better to use addEventListener, but this will do)
    document.body.onkeyup = document.body.onkeydown = function (e) {
      var kc = e.keyCode || e.which;
      keys[kc] = e.type == "keydown";
    };

    /// character movement update

    /// character control
    var detectCharacterMovement = () => {
      if (keys[keys.LEFT]) {
        this.playerHTML.style.left = left + "px";
        left -= 5;
      }
      if (keys[keys.RIGHT]) {
        this.playerHTML.style.left = left + "px";
        left += 5;
      }
    };

    /// game loop
    setInterval(function () {
      detectCharacterMovement();
    }, 1000 / 24);
  }
}
