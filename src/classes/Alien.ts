export class Alien {
  alienHTML: HTMLDivElement | null;
  bgImage: any;

  constructor(bgImage: any) {
    this.alienHTML = null;
    this.bgImage = bgImage;
  }

  spawnAlien() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    let alienDiv = document.createElement("div");
    alienDiv.id = "alien";
    gameBoard.appendChild(alienDiv);
  }
}
