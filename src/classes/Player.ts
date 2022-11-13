export class Player {
  playerHTML: HTMLDivElement;
  constructor() {
    this.playerHTML = <HTMLDivElement>document.createElement("div");
  }
  initialize() {
    this.spawnPlayer();
    this.bestMovePlayer();
  }
  spawnPlayer() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    // let playerDiv = document.createElement("div");
    this.playerHTML.id = "player";
    gameBoard.appendChild(this.playerHTML);
    // this.playerHTML = playerDiv;
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
    interface Keys {
      left: number;
      right: number;
    }
    let keys: Keys = {
      left: 0,
      right: 0,
    };
    console.log("ds");
    /// store key codes and currently pressed ones
    keys.left = 65;
    keys.right = 68;
    let style = window.getComputedStyle(this.playerHTML);
    let left = parseInt(style.getPropertyValue("left"));

    /// store reference to character's position and element

    /// key detection (better to use addEventListener, but this will do)
    document.body.onkeyup = document.body.onkeydown = function (e) {
      let kc: number = e.keyCode || e.which;
      // @ts-ignore:next-line
      keys[kc as unknown as keyof Keys] = e.type == "keydown"; // !BUG
    };

    /// character movement update

    /// character control
    const detectCharacterMovement = () => {
      if (keys[keys.left as unknown as keyof Keys]) {
        this.playerHTML.style.left = left + "px";
        left -= 10;
      }
      if (keys[keys.right as unknown as keyof Keys]) {
        this.playerHTML.style.left = left + "px";
        left += 10;
      }
    };

    /// game loop
    setInterval(function () {
      detectCharacterMovement();
    }, 1000 / 24);
  }
}
