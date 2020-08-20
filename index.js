const width = 28;

const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
let squares = [];
let score = 0;

//grid size: 28 * 28 = 784
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
const layout = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  3,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  2,
  2,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];

//create board
const createBoard = () => {
  for (let index = 0; index < layout.length; index++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    squares.push(square);

    if (layout[index] === 0) {
      squares[index].classList.add("pac-dot");
    } else if (layout[index] === 1) {
      squares[index].classList.add("wall");
    } else if (layout[index] === 2) {
      squares[index].classList.add("ghost-lair");
    } else if (layout[index] === 3) {
      squares[index].classList.add("power-pellet");
    }
  }
};

createBoard();

//starting position of pacman
let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add("pacman");

const control = (e) => {
  squares[pacmanCurrentIndex].classList.remove("pacman");
  switch (e.keyCode) {
    case 40:
      if (
        !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
        !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
        pacmanCurrentIndex + width < width * width
      )
        pacmanCurrentIndex += width;
      break;
    case 38:
      if (
        !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
        pacmanCurrentIndex - width >= 0
      )
        pacmanCurrentIndex -= width;
      break;
    case 37:
      if (
        !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
        pacmanCurrentIndex % width !== 0
      ) {
        pacmanCurrentIndex -= 1;
      } else if (pacmanCurrentIndex === 364) {
        pacmanCurrentIndex = 391;
      }
      break;
    case 39:
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
        pacmanCurrentIndex % width < width - 1
      ) {
        pacmanCurrentIndex += 1;
      } else if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex = 364;
      }
      break;
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  pacDotEaten();
  powerPelletEaten();
  checkForWin();
  checkForGameOver();
};

document.addEventListener("keydown", control);

const pacDotEaten = () => {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    score++;
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
    scoreDisplay.innerHTML = score;
  }
};

const powerPelletEaten = () => {
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    score += 10;
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
    scoreDisplay.innerHTML = score;
    ghosts.forEach((ghost) => {
      ghost.isScared = true;
    });
    setTimeout(unScareGhosts, 10000);
  }
};

const unScareGhosts = () => {
  ghosts.forEach((ghost) => {
    ghost.isScared = false;
  });
};

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("pinky", 376, 400),
  new Ghost("clyde", 379, 500),
  new Ghost("inky", 351, 300),
];

//draw ghosts
ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
});

//move the ghosts
ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  const directions = [-1, +1, -width, +width];
  let direction = directions[Math.floor(Math.random() * directions.length)];

  ghost.timerId = setInterval(function () {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost")
    ) {
      //remove any ghost
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");

      //add direction to current Index
      ghost.currentIndex += direction;

      //add ghost class
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    } else direction = directions[Math.floor(Math.random() * directions.length)];

    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pacman")
    ) {
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      ghost.currentIndex = ghost.startIndex;
      score += 100;
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    }
    checkForGameOver();
  }, ghost.speed);
}

const checkForGameOver = function () {
  if (
    squares[pacmanCurrentIndex].classList.contains("ghost") &&
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
  ) {
    ghosts.forEach((ghost) => {
      clearInterval(ghost.timerId);
    });
    document.removeEventListener("keydown", control);
    alert("Game Over!");
  }
};

const checkForWin = function () {
  if (score === 200) {
    ghosts.forEach((ghost) => {
      clearInterval(ghost.timerId);
    });
    document.removeEventListener("keydown", control);
    alert(">You Win!!<");
  }
};
