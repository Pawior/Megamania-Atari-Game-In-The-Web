import { aliensArr } from "./manageAliens";
export const CollisonChecker = (passedDiv: HTMLDivElement): boolean => {
  // console.log(aliensArr);
  let collisionToReturn = false;
  aliensArr.forEach((alien, idx) => {
    let alienPos = alien.alienHTML.getBoundingClientRect();

    let div1Top = alienPos.top;
    let div1Left = alienPos.left;
    let div1Right = alienPos.right;
    let div1Bottom = alienPos.bottom;

    let passedDivPos = passedDiv.getBoundingClientRect();
    let div2Top = passedDivPos.top;
    let div2Left = passedDivPos.left;
    let div2Right = passedDivPos.right;
    let div2Bottom = passedDivPos.bottom;

    let verticalMatch;
    if (
      (div2Top > div1Top && div2Top < div1Bottom) ||
      (div2Bottom > div1Top && div2Bottom < div1Bottom)
    ) {
      verticalMatch = true;
    } else {
      verticalMatch = false;
    }

    let horizontalMatch;
    if (
      (div2Right > div1Left && div2Right < div1Right) ||
      (div2Left < div1Right && div2Left > div1Left)
    ) {
      horizontalMatch = true;
    } else {
      horizontalMatch = false;
    }

    if (horizontalMatch && verticalMatch) {
      console.log(passedDiv);
      //   let intersect = true;
      if (passedDiv.className == "bullet") {
        alien.alienHTML.remove();
        aliensArr.splice(idx, 1);
      }
      console.log("kolizja!!! Juhu");
      collisionToReturn = true;
    }
  });
  return collisionToReturn;
};
