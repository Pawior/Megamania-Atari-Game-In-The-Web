import { Player } from "./Player";
import { currEnemyType } from "../functions/manageAliens";

export class StatsBar {
  hp: number;
  points: number;
  // player: Player;
  energyBarStartWidth: number = 60;
  energyBarStartTransform: number = 0;

  statsBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar"
  ) as HTMLDivElement;
  healthBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar_health-bar"
  ) as HTMLDivElement;

  constructor() {
    this.hp = 3;
    this.points = 0;
    // this.manageEnergyBar();
    // this.player = player;
  }
  spawnStatsBar() {
    const app: HTMLDivElement = document.querySelector(
      "#app"
    ) as HTMLDivElement;
    // let statsBarDiv = document.createElement("div");
    // statsBarDiv.id = "stats-bar";
    // app.appendChild(statsBarDiv);
  }
  updateHealthBar() {
    this.healthBarHTML.replaceChildren();
    for (let i = 0; i < this.hp; i++) {
      let healthDiv = document.createElement("div");
      healthDiv.classList.add("stats-bar_health-bar_heart");
      this.healthBarHTML.appendChild(healthDiv);
    }
  }
  manageEnergyBar(hurtPlayerFunc: () => void) {
    let energyBar: HTMLDivElement = document.querySelector(
      "#stats-bar_energy-bar_yellowBg"
    ) as HTMLDivElement;
    let energyBarStyle = window.getComputedStyle(energyBar);

    let energyBarWidth: number = parseInt(
      energyBarStyle.getPropertyValue("width")
    );
    let matrixValue = energyBarStyle.getPropertyValue("transform");
    let matrixArr = matrixValue.split(", ");
    // console.log(matrixValue);
    // console.log(matrixArr);
    // console.log(matrixArr[4]);

    this.energyBarChecker(energyBar, hurtPlayerFunc);
  }
  energyBarChecker(
    energyBar: HTMLDivElement,
    hurtPlayerFunc: () => void
  ): void {
    let interval = setInterval(() => {
      // console.log("managuje energy bar");
      this.energyBarStartWidth -= 0.5;
      // this.energyBarStartTransform -= 0.25;
      energyBar.style.width = `${this.energyBarStartWidth}vw`;
      energyBar.style.transform = `translateX(${this.energyBarStartTransform}vw)`;
      if (this.energyBarStartWidth <= 0) {
        // clearInterval(interval);
        // resolve("done");
        Player.playerDeath();
        setTimeout(() => {
          hurtPlayerFunc();
        }, 3000);
        // this.energyBarStartWidth = 60;
        // this.energyBarStartTransform = 0;
        // StatsBar.animationEnergyBar();
      }
    }, 500);
  }
  renewEnergyBar() {
    this.energyBarStartWidth = 60;
    this.energyBarStartTransform = 0;
  }
  addPoints() {
    let pointsBarTag: HTMLElement = document.querySelector(
      "#stats-bar_points-bar_text"
    ) as HTMLElement;
    let pointsCurrentText = parseInt(pointsBarTag.textContent as string);
    let pointsToAdd = 0;
    console.log("currEnemyType");
    console.log(currEnemyType);
    switch (currEnemyType) {
      case "burgers":
        pointsToAdd = 20;
        break;
      case "discs":
        pointsToAdd = 60;
        break;
      case "bugs":
        pointsToAdd = 90;
        break;
      default:
        pointsToAdd = 40;
    }

    let newPoints = (pointsCurrentText += pointsToAdd);
    pointsBarTag.innerHTML = `${newPoints}`;
  }
  zeroPoints() {
    let pointsBarTag: HTMLElement = document.querySelector(
      "#stats-bar_points-bar_text"
    ) as HTMLElement;
    pointsBarTag.innerHTML = `${0}`;
  }
  resetEnergyBar() {
    this.energyBarStartWidth = 62;
    this.energyBarStartTransform = 0;
    this.statsBarHTML;
  }
  static animationEnergyBar() {
    const eneryBarHTML = document.querySelector(
      "#stats-bar_energy-bar_yellowBg"
    ) as HTMLDivElement;
    if (eneryBarHTML.classList.contains("energyBarAnimation")) {
      eneryBarHTML.classList.remove("energyBarAnimation");
      setTimeout(() => {
        eneryBarHTML.classList.add("energyBarAnimation");
      }, 10);
    } else {
      eneryBarHTML.classList.add("energyBarAnimation");
    }
  }
}
