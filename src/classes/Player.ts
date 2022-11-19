export class Player {
  playerHTML: HTMLDivElement;
  constructor() {
    this.playerHTML = <HTMLDivElement>document.createElement("div");
  }
  initialize() {
    this.spawnPlayer();
    this.bestMovePlayer();
  }
  spawnPlayer() {
    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    // let playerDiv = document.createElement("div");
    this.playerHTML.id = "player";
    gameBoard.appendChild(this.playerHTML);
    // this.playerHTML = playerDiv;
  }

  shooting() {
    // console.log(typeof bulletTopProp);
    // bulletLeftProp = 10;

    const gameBoard: HTMLDivElement = document.querySelector(
      "#game-board"
    ) as HTMLDivElement;
    document.addEventListener("keyup", (event: KeyboardEvent) => {
      let keyCode = event.code;
      if (keyCode == "Space") {
        let bullet: HTMLDivElement = document.createElement("div");
        bullet.id = "bullet";

        let bulletStyle = window.getComputedStyle(bullet);
        let bulletTopProp = parseInt(bulletStyle.getPropertyValue("top"));
        // let bulletLeftProp = parseInt(bulletStyle.getPropertyValue("left"));
        bulletTopProp = 10;

        let style = window.getComputedStyle(this.playerHTML);
        let left = parseInt(style.getPropertyValue("left"));
        bullet.style.left = left + "vw";

        gameBoard.insertBefore(bullet, this.playerHTML);

        setInterval(() => {
          bulletTopProp--;
          console.log(bulletTopProp);
          bullet.style.top = `${bulletTopProp}vh`;

          console.log(parseInt(bulletStyle.getPropertyValue("top")));
        }, 1000 / 20);
      }
      // if ( x)
    });
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
    console.log("ds");
    /// store key codes and currently pressed ones
    keys.left = 65;
    keys.right = 68;
    let style = window.getComputedStyle(this.playerHTML);
    let left = parseInt(style.getPropertyValue("left"));

    /// store reference to character's position and element

    /// key detection (better to use addEventListener, but this will do)
    document.body.onkeyup = document.body.onkeydown = function (e) {
      let kc: number = e.keyCode || e.which;
      // @ts-ignore:next-line
      keys[kc as unknown as keyof Keys] = e.type == "keydown"; // !BUG
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
}
