export class Player {
  playerHTML: HTMLDivElement | null;
  constructor() {
    this.playerHTML = null;
  }
  initialize() {
    this.spawnPlayer();
    this.movePlayer();
  }
  spawnPlayer() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    let playerDiv = document.createElement("div");
    playerDiv.id = "player";
    gameBoard.appendChild(playerDiv);
  }
  movePlayer() {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      console.log(e.key);
      switch (e.key) {
        case "a":
          console.log("lewo");
          break;
        default:
          console.log("brak ruchu");
          break;
      }
    });
  }
}
