import { squares } from './grid.js';
import { width } from './width.js';
import { pacDotEaten, powerPelletEaten } from './interaction.js';
import { Ghost } from './Ghost.js';


//starting position of pacman
let pacmanCurrentIndex = 490;

const ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('inky', 351, 300),
  new Ghost('clyde', 379, 500)
]

function moveDown() { 
  pacmanCurrentIndex += width;
}

function moveUp() { 
  pacmanCurrentIndex -= width;
}

function moveLeft() {
  pacmanCurrentIndex -= 1;
}

function moveRight() { 
  pacmanCurrentIndex += 1;
}

function control(e) {
  squares[pacmanCurrentIndex].classList.remove('pacman')
  switch(e.keyCode) {
    case 40:
    // pressed down
    if (
      !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
      !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
      pacmanCurrentIndex + width < width * width
    )
    moveDown();
    break
  
    case 38:
    // pressed up
    if (
      !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
      !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
      pacmanCurrentIndex - width >= 0
    )
    moveUp()
    break
  
    case 37: 
    // pressed left
    if (
      !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') &&
      !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
      pacmanCurrentIndex % width !== 0
    )
    moveLeft()
      if (pacmanCurrentIndex === 364) {
        pacmanCurrentIndex = 390
      }
    break
  
    case 39:
    // pressed right
    if (
      !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&
      !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
      pacmanCurrentIndex % width < width - 1
    )
    moveRight()
      if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex = 365
      }
    break
  }
  squares[pacmanCurrentIndex].classList.add('pacman')
  pacDotEaten();
  powerPelletEaten();
}

ghosts.forEach(ghost => moveGhost(ghost));

function moveGhost(ghost) {
  const directions = [-1, +1, -width, +width];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  console.log(direction);

  ghost.timerId = setInterval(() => { 
  
  if (ghost.currentIndex === 364) {
    ghost.currentIndex = 390;
  } else if (ghost.currentIndex === 391) { 
    ghost.currentIndex = 365;
  } 

  if (
    !squares[ghost.currentIndex + direction].classList.contains('wall') &&
    !squares[ghost.currentIndex + direction].classList.contains('ghost')
  ) {
    //remove any ghost
    squares[ghost.currentIndex].classList.remove(ghost.className);
    squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');
    //add direction to current Index
    ghost.currentIndex += direction;
    //add ghost class
    squares[ghost.currentIndex].classList.add(ghost.className);  
    squares[ghost.currentIndex].classList.add('ghost');
  } else direction = directions[Math.floor(Math.random() * directions.length)]

    if (ghost.isScared) { 
      squares[ghost.currentIndex].classList.add('scared-ghost');
    }
  }, ghost.speed)
  // clearInterval(ghost.timerId);
};
// clearInterval(ghost.timerId);

export { pacmanCurrentIndex, ghosts, control };