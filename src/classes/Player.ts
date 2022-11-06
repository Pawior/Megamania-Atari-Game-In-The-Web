export class Player {
  playerHTML: HTMLDivElement | null;
  constructor() {
    this.playerHTML = null;
  }
  initialize() {
    this.spawnPlayer();
    this.betterMovePlayer();
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

    let style = window.getComputedStyle(this.playerHTML);
    let left = parseInt(style.getPropertyValue("left"));
    window.onkeydown = (e) => {
      if (keystack.length < 10) {
        keystack.push(e.which);
      }
    };

    window.onkeyup = (e) => {
      keystack = [];
      // while (keystack.length > 0) {
      //   keystack.pop();
      // }
    };

    const draw = () => {
      let key = keystack[keystack.length - 1];
      console.log(keystack);
      // if (!(isMoving = isMoving % 2)) key = keystack.pop();
      // else key = prevKey;
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
    }, 1000 / 30);
  }
}
