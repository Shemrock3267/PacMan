import { squares } from './grid.js';
import { pacmanCurrentIndex, ghosts, control} from './movement.js'

const scoreDisplay = document.getElementById('score');
let score = 0;

function showScore() { 
  scoreDisplay.textContent = ` ${score}`;
}

function pacDotEaten() {
  squares[pacmanCurrentIndex].classList.remove('pac-dot');
  score++;
  showScore();
}

function ghostEaten(ghost) { 
  squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
  ghost.currentIndex = ghost.startIndex;
  score += 100;
  squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
  showScore();
}

function powerPelletEaten() { 
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) { 
    squares[pacmanCurrentIndex].classList.remove('power-pellet');
    score += 10;
    scareGhost();
    showScore();
  }
}

function scareGhost() {
  ghosts.forEach(ghost => { 
    ghost.isScared = true;
    // make ghost "brave" 
    setTimeout(() => {
      makeGhostBrave(ghost);
    }, 10000);
  })
}

function makeGhostBrave(ghost) { 
  ghost.isScared = false;
  squares[ghost.currentIndex].classList.remove('scared-ghost');
}

function checkForGameOver() {
  //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost 
  if (squares[pacmanCurrentIndex].classList.contains('ghost')
    && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost =>  clearInterval(ghost.timerId));
      //remove eventlistener from our control function
      document.removeEventListener('keyup', control);
      //tell user the game is over
      const gameOver = document.createElement('div');
      gameOver.textContent = 'GAME OVER';
      scoreDisplay.appendChild(gameOver);
  }
}

export { scoreDisplay, score, pacDotEaten, powerPelletEaten, ghostEaten, checkForGameOver };