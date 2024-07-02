## Tetris Game

### Introduction
Tetris is a tile-matching puzzle video game originally designed and programmed by Alexey Pajitnov. This project recreates the classic game with a modern twist, implemented using HTML5, CSS, and JavaScript.

### Technologies Used
- HTML
- CSS
- JavaScript

### Usage
To start the game, open the `index.html` file in a web browser.

### Controls
- Arrow keys: Move tiles
- ctrl+R: Restart the game
- Q: For Rotate

### Game Logic
- **Tile Generation:** A new tile (2 or 4) appears at a random empty position on the grid after each move.
- **Tile Movement:** Tiles slide in the direction of the player's input (left, right, up, down).
- **Tile Merging:** When two tiles of the same number collide, they merge into one tile with their sum.
- **Score Calculation:** The score increases by the value of the merged tiles.
- **Game Over:** The game ends when there are no valid moves left (no empty spaces and no adjacent tiles with the same number).

### How the Game Works
1. **Initialization:** The game initializes a 4x4 grid with two randomly placed tiles (2 or 4).
2. **Tile Movement:** Players use the arrow keys to slide all tiles in the chosen direction. Tiles slide until they hit the edge of the grid or another tile.
3. **Tile Merging:** When two tiles with the same number collide, they merge into one tile with their combined value. The merged tile cannot merge again in the same move.
4. **New Tile Generation:** After each move, a new tile (2 or 4) appears at a random empty position on the grid.
5. **Score Calculation:** The player's score increases by the value of the tiles merged in that move.
6. **Game Over:** The game checks for possible moves after each move. The game ends if there are no valid moves left (no empty spaces and no adjacent tiles with the same number).

### Future Enhancements
- Enhanced animations and effects
- Leaderboard to track high scores
- Additional game modes (e.g., timed mode, challenge mode)
- Improved AI for better tile generation

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

### DEMO VIDEO
(https://youtu.be/FmmHYk5Ve4I?si=SwKfjKngMKILZsn6)

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Author
**Name:** Anviksha Srivastava  
**Semester:** 2nd
**Email:** anvikshashrivastav@gmail.com
