import { createBoard } from './app/grid.js';
import { control } from './app/movement.js';
document.addEventListener('keyup', control);

createBoard();