import { Player } from "./classes/Player";
import { ManageAliens } from "./functions/manageAliens";
let player: Player;
export const Game = () => {
  let intro = document.querySelector("#intro") as HTMLDivElement;
  showIntro(intro);
  setTimeout(() => {
    intro.remove();
    openInstruction();
    console.log("start the game");
    // clearInterval(discoColor);
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
const showIntro = (intro: HTMLDivElement) => {
  setInterval(() => {
    // let randColor = colors[Math.floor(Math.random() * colors.length)];
    let randColor = Math.floor(Math.random() * 1000);
    let randBright = Math.random();
    intro.style.filter = `brightness(${randBright}) hue-rotate(${randColor}deg)`;
    // playerHtmlTag.style.filter = `brightness(${randBright})`;
  }, 200);
};
const openInstruction = () => {
  const modal: HTMLElement = document.querySelector(".modal") as HTMLElement;

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
