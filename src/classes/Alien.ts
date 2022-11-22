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
    this.alienHTML.style.left = this.startLeft + "vw";
    gameBoard.appendChild(this.alienHTML);
  }
  standardMove() {
    let moveHorizontalStep: number = 0;
    let moveVerticalStep: number = 0;
    let style = window.getComputedStyle(this.alienHTML);
    let left = parseInt(style.getPropertyValue("left"));
    let top = parseInt(style.getPropertyValue("top"));
    // let incrementorHorizontalSum: number = 0;
    let incrementorHorizontal: number = 1;
    let incrementorVertical: number = 0.1;

    const checkMaxIncrement = () => {
      if (moveHorizontalStep > 30) {
        incrementorHorizontal = -1;
      } else if (moveHorizontalStep < -30) {
        incrementorHorizontal = 1;
      }

      if (moveVerticalStep >= 70) {
        moveVerticalStep = 0;
      }

      // if (left > -48) {
      //   this.playerHTML.style.left = left + "vw";
      //   left -= 1;
      // }
      // if (keys[keys.right as unknown as keyof Keys] && left < 48) {
      //   this.playerHTML.style.left = left + "vw";
      //   left += 1;
      // }
    };

    setInterval(() => {
      moveHorizontalStep += incrementorHorizontal;
      moveVerticalStep += incrementorVertical;
      checkMaxIncrement();
      this.alienHTML.style.left = `${left + moveHorizontalStep}vw`;
      this.alienHTML.style.top = `${top + moveVerticalStep}vh`;
    }, 1000 / 24);
  }
}
