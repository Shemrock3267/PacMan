import { squares } from './grid.js';
import { pacmanCurrentIndex, ghosts} from './movement.js'

const scoreDisplay = document.getElementById('score');
let score = 0;

function showScore() { 
  scoreDisplay.textContent = ` ${score}`;
}

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    squares[pacmanCurrentIndex].classList.remove('pac-dot');
    score++;
    showScore();
  }
}

function powerPelletEaten() { 
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) { 
    squares[pacmanCurrentIndex].classList.remove('power-pellet');
    score += 10;
    showScore();
    scareGhost()
  }
}

function scareGhost() {
  ghosts.forEach(ghost => { 
    ghost.isScared = true;
    // console.log(`Scared? ${ghost.isScared}`);
    // make ghost "brave" 
    setTimeout(() => {
      makeGhostBrave(ghost);
      // console.log(`Scared? ${ghost.isScared}`);
    }, 10000);
  })
}

function makeGhostBrave(ghost) { 
  ghost.isScared = false;
}

export { scoreDisplay, score, pacDotEaten, powerPelletEaten };