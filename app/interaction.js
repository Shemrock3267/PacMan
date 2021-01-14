import { squares } from './grid.js';
import { pacmanCurrentIndex} from './movement.js'

const scoreDisplay = document.getElementById('score');
let score = 0;

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    squares[pacmanCurrentIndex].classList.remove('pac-dot');
    score++;
    scoreDisplay.textContent = ` ${score}`;
  }
}

export { scoreDisplay, score, pacDotEaten };