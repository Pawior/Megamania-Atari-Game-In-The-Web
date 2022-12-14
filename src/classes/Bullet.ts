import {
  CollisonChecker,
  PlayerCollisonChecker,
} from "../functions/collisionChecker";
import { StatsBar } from "./StatsBar";
import { aliensArr, goToNextWave } from "../functions/manageAliens";

export class Bullet {
  bulletHTML: HTMLDivElement = document.createElement("div") as HTMLDivElement;

  statsBar: StatsBar;
  constructor(statsBar: StatsBar) {
    this.statsBar = statsBar;
  }
  spawnAlienBullet(
    alienHTML: HTMLDivElement,
    leftProp: string,
    topProp: string
  ) {
    this.bulletHTML.classList.add("bullet");

    let bulletBotProp = -2;

    let style = window.getComputedStyle(alienHTML);
    let left = parseInt(style.getPropertyValue("left"));
    left -= 10;
    this.bulletHTML.style.setProperty("left", `calc(50% + ${left}px)a`);

    alienHTML.appendChild(this.bulletHTML);
    console.log("alien bullet");
    console.log(leftProp);
    console.log(topProp);
    let bulletShootInterval = setInterval(() => {
      bulletBotProp -= 3;
      // console.log("aliensArr");
      // console.log(aliensArr);
      // console.log(bulletBotProp);
      this.bulletHTML.style.bottom = `${bulletBotProp}vh`;
      let res: any = this.checkPlayerCollision();
      // console.log(res);
      if (res.hit) {
        console.log("trafiony");
        console.log(aliensArr);
        this.addPointsAfterHit();
        if (aliensArr.length == 0) {
          console.log("next fala");

          goToNextWave();
          this.statsBar.resetEnergyBar();
        }
        clearInterval(bulletShootInterval);
        this.bulletHTML.remove();
      }
      if (bulletBotProp > 105 || bulletBotProp < -105) {
        clearInterval(bulletShootInterval);
        this.bulletHTML.remove();
      }
      // console.log(parseInt(bulletStyle.getPropertyValue("bottom")));
    }, 1000 / 20);
  }
  spawnBullet(playerHTML: HTMLDivElement) {
    const bulletZone: HTMLDivElement = document.querySelector(
      "#bullet-zone"
    ) as HTMLDivElement;
    // const playerHTML

    this.bulletHTML.classList.add("bullet");

    let bulletBotProp = -2;

    // Probably dont needed
    let style = window.getComputedStyle(playerHTML);
    let left = parseInt(style.getPropertyValue("left"));
    left -= 10;
    this.bulletHTML.style.setProperty("left", `calc(50% + ${left}px)`);
    bulletZone.appendChild(this.bulletHTML);

    let bulletShootInterval = setInterval(() => {
      bulletBotProp += 3;
      // console.log("aliensArr");
      // console.log(aliensArr);
      // console.log(bulletBotProp);
      this.bulletHTML.style.bottom = `${bulletBotProp}vh`;
      let res: any = this.checkCollision();
      // console.log(res);
      if (res.hit) {
        console.log("trafiony");
        console.log(aliensArr);
        this.addPointsAfterHit();
        if (aliensArr.length == 0) {
          console.log("next fala");

          goToNextWave();
          this.statsBar.resetEnergyBar();
        }
        clearInterval(bulletShootInterval);
        this.bulletHTML.remove();
      }
      if (bulletBotProp > 105) {
        clearInterval(bulletShootInterval);
        this.bulletHTML.remove();
      }
      // console.log(parseInt(bulletStyle.getPropertyValue("bottom")));
    }, 1000 / 20);
  }
  checkCollision() {
    return CollisonChecker(this.bulletHTML);
  }
  checkPlayerCollision() {
    return PlayerCollisonChecker(this.bulletHTML);
  }
  addPointsAfterHit() {
    this.statsBar.addPoints();
  }
}
