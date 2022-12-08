export class Alien {
  alienHTML: HTMLDivElement;
  bgImage: any;
  startLeft: number;
  startHeight: number;
  intervalMove: any;
  constructor(bgImage: any, startLeft: number, startHeight: number) {
    this.alienHTML = document.createElement("div");
    this.bgImage = bgImage;
    this.startLeft = startLeft;
    this.startHeight = startHeight;
  }

  spawnAlien() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    this.alienHTML = document.createElement("div");
    this.alienHTML.classList.add("alien");
    this.alienHTML.style.left = this.startLeft + "vw";
    this.alienHTML.style.top = this.startHeight + "vh";
    console.log(this.bgImage);
    console.log("bg img");
    this.alienHTML.style.backgroundImage = `url(../enemies/${this.bgImage})`;
    gameBoard.appendChild(this.alienHTML);
  }
  respawnAlien() {
    clearInterval(this.intervalMove);
    this.alienHTML.style.left = this.startLeft + "vw";
    this.alienHTML.style.top = this.startHeight + "vh";
    this.alienHTML.style.display = "none";
    setTimeout(() => {
      this.alienHTML.style.display = "block";
    }, 50);
    // this.standardMove();
  }
  standardMove() {
    let moveHorizontalStep: number = 0;
    let moveVerticalStep: number = 0;
    let style = window.getComputedStyle(this.alienHTML);
    let left = parseInt(style.getPropertyValue("left"));
    let top = parseInt(style.getPropertyValue("top"));
    // let incrementorHorizontalSum: number = 0;
    let incrementorHorizontal: number = 1;
    let incrementorVertical: number = 1;

    const checkMaxIncrement = () => {
      if (moveHorizontalStep > 30) {
        incrementorHorizontal = -1;
      } else if (moveHorizontalStep < -30) {
        incrementorHorizontal = 1;
      }

      if (moveVerticalStep >= 70) {
        moveVerticalStep = -20;
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

    this.intervalMove = setInterval(() => {
      moveHorizontalStep += incrementorHorizontal;
      moveVerticalStep += incrementorVertical;
      checkMaxIncrement();
      this.alienHTML.style.left = `${left + moveHorizontalStep}vw`;
      console.log(this.alienHTML.style.left);
      this.alienHTML.style.top = `${top + moveVerticalStep}vh`;
    }, 1000 / 24);
  }
  hamburgerMove() {
    let moveHorizontalStep: number = 0;
    let style = window.getComputedStyle(this.alienHTML);
    // let left = parseInt(style.getPropertyValue("left"));
    console.log(this.alienHTML.style.left);
    let left = parseInt(this.alienHTML.style.left.replace(/\D/g, ""));

    // myString = myString.replace(/\D/g,'');
    // let incrementorHorizontalSum: number = 0;
    let incrementorHorizontal: number = 1;
    let incrementorVertical: number = 1;
    let windowMove = window.innerWidth;

    const checkMaxIncrement = () => {
      // let left = parseInt(style.getPropertyValue("left"));
      // console.log(left);
      // console.log(left);
      if (left > 100) {
        // this.alienHTML.style.left = "-5vw";
        // moveHorizontalStep = -80;
        left = -5;
      }
      // else if (moveHorizontalStep < -30) {
      //   incrementorHorizontal = 1;
      // }

      // if (moveHorizontalStep >= 90) {
      //   moveHorizontalStep = -20;
      //   this.alienHTML.style.left = `0vw`;
      // }
    };

    this.intervalMove = setInterval(() => {
      left += incrementorHorizontal;
      console.log("x");
      // let left = parseInt(style.getPropertyValue("left"));
      // console.log(left);
      // console.log(moveHorizontalStep);
      this.checkAlienHtmlExistence(this.alienHTML);
      checkMaxIncrement();
      this.alienHTML.style.left = `${left}vw`;
    }, 1000 / 24);
  }
  checkAlienHtmlExistence(elem: HTMLDivElement) {
    var in_dom = document.body.contains(elem);
    var observer = new MutationObserver((mutations) => {
      if (document.body.contains(elem)) {
        if (!in_dom) {
          console.log("element inserted");
        }
        in_dom = true;
      } else if (in_dom) {
        in_dom = false;
        console.log("element removed");
        clearInterval(this.intervalMove);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}
