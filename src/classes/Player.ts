import { Bullet } from "./Bullet";
import { CollisonChecker } from "../functions/collisionChecker";
import { StatsBar } from "./StatsBar";
import { resetAliens, hardResetAliens } from "../functions/manageAliens";

export class Player {
  // static playerTag
  playerHTML: HTMLDivElement;
  statsBar: StatsBar;
  constructor() {
    this.playerHTML = <HTMLDivElement>document.createElement("div");
    this.statsBar = new StatsBar();
  }
  initialize() {
    this.spawnPlayer();
    this.bestMovePlayer();
    this.initializeStatsBar();
  }
  spawnPlayer() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#player-zone"
    ) as HTMLDivElement;
    // let playerDiv = document.createElement("div");
    this.playerHTML.id = "player";
    gameBoard.appendChild(this.playerHTML);
    // this.playerHTML = playerDiv;
    this.checkCollision();
  }

  shooting() {
    // console.log(typeof bulletTopProp);
    // bulletLeftProp = 10;

    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;

    const bulletZone: HTMLDivElement = document.querySelector(
      "#bullet-zone"
    ) as HTMLDivElement;

    let spamBullet = true;
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      let keyCode = event.code;
      if (keyCode == "Space" && spamBullet) {
        spamBullet = false;
        console.log(spamBullet);
        let bulletClass = new Bullet(this.statsBar);
        bulletClass.spawnBullet(this.playerHTML);
        setTimeout(() => {
          spamBullet = true;
        }, 250);
        // bulletClass.checkCollision();
      }
    });
  }

  checkCollision() {
    let collisionBlock = false;
    setInterval(() => {
      let doesCollided = CollisonChecker(this.playerHTML);

      if (doesCollided.hit && collisionBlock == false) {
        this.hurtPlayer();
        collisionBlock = true;
        setTimeout(() => {
          collisionBlock = false;
        }, 2000);
      }
    }, 1000 / 30);
  }

  hurtPlayer() {
    this.statsBar.hp--;
    this.statsBar.updateHealthBar();
    console.log(this.statsBar);
    resetAliens();
    if (this.statsBar.hp == 0) {
      this.playerLost();
    }
  }

  playerLost() {
    hardResetAliens();
    this.statsBar.zeroPoints();
    this.statsBar.resetEnergyBar();
    this.statsBar.hp = 3;
    this.statsBar.updateHealthBar();
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
    // console.log("ds");
    /// store key codes and currently pressed ones
    keys.left = 65;
    keys.right = 68;
    let style = window.getComputedStyle(this.playerHTML);
    let left = parseInt(style.getPropertyValue("left"));

    /// store reference to character's position and element

    /// key detection (better to use addEventListener, but this will do)
    document.body.onkeyup = document.body.onkeydown = function (e) {
      // console.log(e.keyCode);
      if (e.keyCode != 32) {
        // console.log("dsf");
        let kc: number = e.keyCode || e.which;
        // @ts-ignore:next-line
        keys[kc as unknown as keyof Keys] = e.type == "keydown"; // !BUG
      }
    };

    /// character movement update

    /// character control
    const detectCharacterMovement = () => {
      if (keys[keys.left as unknown as keyof Keys] && left > -48) {
        this.playerHTML.style.left = left + "vw";
        left -= 1;
      }
      if (keys[keys.right as unknown as keyof Keys] && left < 48) {
        this.playerHTML.style.left = left + "vw";
        left += 1;
      }
    };
    /// game loop
    setInterval(function () {
      detectCharacterMovement();
    }, 1000 / 24);
  }
  initializeStatsBar() {
    // let statsBar = new StatsBar();
    this.statsBar.spawnStatsBar();
    this.statsBar.updateHealthBar();
  }
}
