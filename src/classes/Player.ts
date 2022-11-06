export class Player {
  playerHTML: HTMLDivElement | null;
  constructor() {
    this.playerHTML = null;
  }
  respawnPlayer() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    let playerDiv = document.createElement("div");
    playerDiv.id = "playerDiv";
    gameBoard.appendChild(playerDiv);
  }
}
