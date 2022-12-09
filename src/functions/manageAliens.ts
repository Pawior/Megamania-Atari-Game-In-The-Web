import { Alien } from "../classes/Alien";

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

  spawnBurgers();
};

export const spawnDiscs = (): void => {
  currEnemyType = "discs";
  let aliensAmount: number = 1;

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
};

export const spawnBurgers = (): void => {
  currEnemyType = "burgers";
  let aliensAmount: number = 3;

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
  switch (currEnemyType) {
    case "discs":
      spawnBurgers();
      break;
    case "burgers":
      spawnDiscs();
      break;
    default:
      console.log("no respawn");
  }
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
