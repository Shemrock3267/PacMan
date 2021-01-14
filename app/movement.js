import { squares, width} from './grid.js';
import { pacDotEaten } from './interaction.js';

//starting position of pacman
let pacmanCurrentIndex = 490;

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
}

export { pacmanCurrentIndex, control };