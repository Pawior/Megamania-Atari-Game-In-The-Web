import { Alien } from "../classes/Alien";
import { StatsBar } from "../classes/StatsBar";

let aliensArr: Alien[] = [];
let currGameLevel = 0;
export let currEnemyType: string;
export const ManageAliens = (): void => {
  // const spawnAliens = (): void => {
  //   for (let i = 0; i < aliensAmount; i++) {
  //     console.log("robie aliena");
  //     let alien = new Alien("enemyDisc.gif", i * 1, 3);
  //     aliensArr.push(alien);
  //     alien.spawnAlien();
  //     console.log(alien);
  //   }
  // };
  // const moveAliens = (): void => {
  //   aliensArr.forEach((alien: Alien) => {
  //     alien.standardMove();
  //   });
  // };
  // moveAliens();
  // spawnBurgers();
  // spawnBugs();
  spawnDiscs();
};

export const spawnDiscs = (): void => {
  currEnemyType = "discs";
  let aliensAmount: number = 1;
  console.log("spawn disców");

  for (let i = 0; i < aliensAmount; i++) {
    console.log("robie aliena");
    let alien = new Alien("enemyDisc.gif", i * 1, 3);
    aliensArr.push(alien);
    alien.spawnAlien();
    console.log(alien);
  }
  const moveAliens = (): void => {
    aliensArr.forEach((alien: Alien) => {
      alien.standardMove();
    });
  };
  moveAliens();
  console.log(aliensArr);
};

export const spawnBurgers = (): void => {
  currEnemyType = "burgers";
  let aliensAmount: number = 3;
  console.log("spawn burgerów");

  const spawnAliens = (): void => {
    for (let i = 0; i < aliensAmount / 2; i++) {
      for (let j = 1; j < 4; j++) {
        console.log("robie aliena");
        let alien = new Alien("enemyHamburger.png", i * 7, j * 8);
        aliensArr.push(alien);
        alien.spawnAlien();
        console.log(alien);
      }
    }
  };

  const moveAliens = (): void => {
    aliensArr.forEach((alien: Alien) => {
      alien.hamburgerMove();
    });
  };
  spawnAliens();
  moveAliens();
  console.log(aliensArr);
};

export const spawnBugs = (): void => {
  currEnemyType = "bugs";
  let aliensAmount: number = 8;
  console.log("spawn burgerów");

  const spawnAliens = (): void => {
    for (let i = 1; i <= aliensAmount / 2; i++) {
      let ctr = 2;
      for (let j = 1; j < 4; j++) {
        ctr += 2;
        console.log("robie aliena");
        let alien = new Alien("enemyBugs.gif", i * (7 + ctr), j * 8);
        aliensArr.push(alien);
        if (j == 3) {
          alien.turnShooting();
        }
        alien.spawnAlien();
        console.log(alien);
      }
    }
  };

  const moveAliens = (): void => {
    aliensArr.forEach((alien: Alien) => {
      alien.bugsMove();
    });
  };
  spawnAliens();
  moveAliens();
  console.log(aliensArr);
};

export const hardResetAliens = (): void => {
  aliensArr.forEach((alien: Alien) => {
    alien.alienHTML.remove();
  });
  ManageAliens();
};

export const resetAliens = (): void => {
  // let restAliens = document.querySelectorAll(".alien");
  // for (let i = 0; i < restAliens.length; i++) {
  //   restAliens[i].remove();
  // }

  // for (let i = 0; i < aliensArr.length; i++) {
  //   console.log("robie aliena");
  //   let alien = new Alien("img", i * 2.5);
  //   alien.spawnAlien();
  //   alien.standardMove();
  // }

  const respawnAliens = () => {
    aliensArr.forEach((alien) => {
      alien.respawnAlien();
      console.log("przemieszczam");
      switch (currEnemyType) {
        case "discs":
          alien.standardMove();
          break;
        case "burgers":
          alien.hamburgerMove();
          break;
        case "bugs":
          alien.bugsMove();
          break;
      }
    });
  };
  respawnAliens();
  // for (let i = 0; i < aliensArr.length; i++) {
  //   aliensArr[i].standardMove();
  // }
  // aliensArr.forEach((alien: Alien) => {
  //   console.log();
  //   alien.standardMove();
  // });
};

export const goToNextWave = () => {
  console.log("spawn zrobiłem");
  console.log(aliensArr);
  switch (currEnemyType) {
    case "discs":
      spawnBugs();
      break;
    case "burgers":
      spawnDiscs();
      break;
    case "bugs":
      spawnBurgers();
      break;

    default:
      console.log("no respawn");
  }
  // animation
  StatsBar.animationEnergyBar();
};

export const stopMove = () => {
  aliensArr.forEach((alien) => {
    alien.stopMove();
  });
};

let monitoringI = 0;

// const monitorAliensState = () => {
//   monitoringI++;
//   let monitoring = setInterval(() => {
//     // console.log("monitoring " + monitoringI + " działa");

//     // console.log("Brak alienów");
//     console.log(aliensArr);
//     if (aliensArr.length == 0) {
//       clearInterval(monitoring);
//       // goToNextWave();
//       setTimeout(() => {
//         monitorAliensState();
//       }, 1000);
//     }
//   }, 300);
// };
// monitorAliensState();
// const aliensStateChecker = () => {
//   // setInterval( () => {

//   // }, 500 )

// }

export { aliensArr };
