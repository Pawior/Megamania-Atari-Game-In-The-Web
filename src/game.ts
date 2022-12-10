import { Player } from "./classes/Player";
import { StatsBar } from "./classes/StatsBar";
// import { Alien } from "./classes/Alien";
import { ManageAliens } from "./functions/manageAliens";
import { CollisonChecker } from "./functions/collisionChecker";
let player: Player;
export const Game = () => {
  let intro = document.querySelector("#intro") as HTMLDivElement;
  let discoColor: number = 0;
  showIntro(intro, discoColor);
  setTimeout(() => {
    intro.remove();
    openInstruction();
    console.log("start the game");
    // let alien = new Alien("img", 100);
    // alien.spawnAlien();
    // player.spawnPlayer();
    player = new Player();
    player.initialize();
    player.shooting();
    // let statsBar = new StatsBar(player);
    // statsBar.spawnStatsBar();
    ManageAliens();
    // CollisonChecker();
  }, 5000);
};
const showIntro = (intro: HTMLDivElement, discoColor: number) => {
  discoColor = setInterval(() => {
    console.log("umiera player");
    // let randColor = colors[Math.floor(Math.random() * colors.length)];
    let randColor = Math.floor(Math.random() * 1000);
    let randBright = Math.random();
    intro.style.filter = `brightness(${randBright}) hue-rotate(${randColor}deg)`;
    // playerHtmlTag.style.filter = `brightness(${randBright})`;
  }, 340);
  console.log("intro");
};
const openInstruction = () => {
  const modal: HTMLElement = document.querySelector(".modal") as HTMLElement;
  const trigger: HTMLElement = document.querySelector(
    ".trigger"
  ) as HTMLElement;
  const closeButton: HTMLElement = document.querySelector(
    ".close-button"
  ) as HTMLElement;

  function addModal() {
    modal.classList.add("show-modal");
  }
  function removeModal() {
    modal.classList.remove("show-modal");
  }

  function windowOnClick(event: any) {
    if (event.target === modal) {
      removeModal();
    }
  }

  addModal();
  setTimeout(() => {
    removeModal();
  }, 3000);
  closeButton.addEventListener("click", removeModal);
  window.addEventListener("click", windowOnClick);
};
export { player };
