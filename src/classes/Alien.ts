import { Bullet } from "./Bullet";
import { StatsBar } from "./StatsBar";

export class Alien {
  alienHTML: HTMLDivElement;
  bgImage: any;
  startLeft: number;
  startHeight: number;
  intervalMove: any;
  canMove: boolean;
  constructor(bgImage: any, startLeft: number, startHeight: number) {
    this.alienHTML = document.createElement("div");
    this.bgImage = bgImage;
    this.startLeft = startLeft;
    this.startHeight = startHeight;
    this.canMove = true;
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
    this.alienHTML.style.backgroundImage = `url(./enemies/${this.bgImage})`;
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
  stopMove() {
    // clearInterval(this.intervalMove);
    this.canMove = false;
    setTimeout(() => {
      this.canMove = true;
    }, 3000);
  }
  discMove() {
    let moveHorizontalStep: number = 0;
    let moveVerticalStep: number = 0;
    let left = parseInt(this.alienHTML.style.left.replace(/\D/g, ""));
    let top = parseInt(this.alienHTML.style.top.replace(/\D/g, ""));
    console.log("standardMove");
    console.log(top);
    console.log(left);
    // let incrementorHorizontalSum: number = 0;
    let incrementorHorizontal: number = 1;
    let incrementorVertical: number = 0.2;

    const checkMaxIncrement = () => {
      if (moveHorizontalStep > 10) {
        incrementorHorizontal = -1;
      } else if (moveHorizontalStep < -40) {
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
      if (this.canMove) {
        moveHorizontalStep += incrementorHorizontal;
        moveVerticalStep += incrementorVertical;
        checkMaxIncrement();
        this.alienHTML.style.left = `${left + moveHorizontalStep}vw`;
        // console.log(this.alienHTML.style.left);
        this.alienHTML.style.top = `${top + moveVerticalStep}vh`;
      }
    }, 1000 / 24);
  }
  hamburgerMove() {
    // let left = parseInt(style.getPropertyValue("left"));
    console.log(this.alienHTML.style.left);
    let left = parseInt(this.alienHTML.style.left.replace(/\D/g, ""));

    // myString = myString.replace(/\D/g,'');
    // let incrementorHorizontalSum: number = 0;
    let incrementorHorizontal: number = 1;

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
      if (this.canMove) {
        left += incrementorHorizontal;

        if (document.body.contains(this.alienHTML)) {
          // console.log("jest html");
        } else {
          // console.log("nie ma html wdomu");
          clearInterval(this.intervalMove);
        }
        checkMaxIncrement();
        this.alienHTML.style.left = `${left}vw`;
      }
    }, 1000 / 24);
  }
  bugsMove() {
    console.log(this.alienHTML.style.left);
    let left = parseInt(this.alienHTML.style.left.replace(/\D/g, ""));

    let slowMoveIncrement: number = 0.8;
    let fastMoveIncrement: number = 2;

    const checkMaxIncrement = () => {
      if (left > 100) {
        left = -5;
      }
    };

    // let randMoveType = Math.floor(Math.random() * 3);
    let randMoveType: number;

    function timeout(ms: number) {
      return new Promise((res) => setTimeout(res, ms));
    }
    const changeMove = async (newMove: number) => {
      // $('#q').append('first <br>');
      randMoveType = newMove;
      console.log("robi sie");
    };

    const moveOrders = async () => {
      await changeMove(0);
      await timeout(3000);
      await changeMove(1);
      await timeout(3000);
      await changeMove(2);
      await timeout(3000);
    };
    moveOrders();
    setInterval(() => {
      moveOrders();

      // randMoveType = Math.floor(Math.random() * 3);
    }, 9100);
    this.intervalMove = setInterval(() => {
      if (this.canMove) {
        switch (randMoveType) {
          case 0:
            left += slowMoveIncrement;
            break;
          case 1:
            left += fastMoveIncrement;
            break;
          case 2:
            left += 0;
            break;
          default:
            console.log("nie ma takiej opcji robaki");
        }

        if (document.body.contains(this.alienHTML)) {
          // console.log("jest html");
        } else {
          // console.log("nie ma html wdomu");
          clearInterval(this.intervalMove);
        }
        checkMaxIncrement();
        this.alienHTML.style.left = `${left}vw`;
      }
    }, 1000 / 24);
  }
  turnShooting() {
    // console.log(spamBullet);
    setInterval(() => {
      let randomShoot = Math.random() * 100;
      if (randomShoot < 40) {
        let statsBar = new StatsBar();
        let bulletClass = new Bullet(statsBar);
        bulletClass.spawnAlienBullet(
          this.alienHTML,
          this.alienHTML.style.left,
          this.alienHTML.style.top
        );
      }
      //   this.alienHTML.style.left = this.startLeft + "vw";
      // this.alienHTML.style.top = this.startHeight + "vh";
    }, 3000);
    // setTimeout(() => {
    //   spamBullet = true;
    // }, 250);
  }
  checkAlienHtmlExistence(elem: HTMLDivElement) {
    var in_dom = document.body.contains(elem);
    var observer = new MutationObserver(() => {
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
