export class Alien {
  alienHTML: HTMLDivElement;
  bgImage: any;
  startLeft: number;

  constructor(bgImage: any, startLeft: number) {
    this.alienHTML = document.createElement("div");
    this.bgImage = bgImage;
    this.startLeft = startLeft;
  }

  spawnAlien() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    this.alienHTML = document.createElement("div");
    this.alienHTML.id = "alien";
    this.alienHTML.style.left = this.startLeft + "px";
    gameBoard.appendChild(this.alienHTML);
  }
  standardMove() {
    let moveStep = 0;
    let style = window.getComputedStyle(this.alienHTML);
    let left = parseInt(style.getPropertyValue("left"));

    setInterval(() => {
      moveStep += 1;
      this.alienHTML.style.left = `${left + moveStep}px`;
    }, 1000 / 24);
  }
}
