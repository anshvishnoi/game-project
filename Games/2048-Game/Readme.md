## 2048 Game

### Introduction
2048 is a single-player sliding block puzzle game. The game was developed by Gabriele Cirulli and has gained widespread popularity due to its simple yet addictive gameplay. This project recreates the game using HTML5, CSS3, and JavaScript.

### Technologies Used
- HTML
- CSS
- JavaScript

### Usage
To start the game, open the `index.html` file in a web browser.

### Controls
- Arrow keys: Slide the tiles
- R: Restart the game


## How to Play
- Use the arrow keys (up, down, left, right) to move the tiles.
- When two tiles with the same number collide, they merge into one with the sum of the two tiles.
- The goal is to create a tile with the number 2048.
- The game is over when there are no possible moves left.

## Game Logic
1. **Grid Initialization**: The game starts with a 4x4 grid with two randomly placed tiles, each with a value of either 2 or 4.
2. **Tile Movement**: Tiles are moved in the direction of the arrow keys pressed. All tiles move as far as possible in the selected direction until they either hit the edge of the grid or another tile.
3. **Tile Merging**: When two tiles with the same value collide, they merge to form a new tile with their combined value. After each move, a new tile (with a value of 2 or 4) is added to a random empty spot on the grid.
4. **Winning and Losing Conditions**: The player wins by creating a 2048 tile. The game ends when there are no empty spaces and no possible moves left.


## Future Enhancements
- **Undo Feature**: Allow players to undo their last move.
- **Online Multiplayer Mode**: Implement a competitive mode where players can compete against each other in real-time.
- **AI Solver**: Implement an AI that can play the game and achieve high scores.
- **Mobile Optimization**: Improve the game’s performance and usability on mobile devices.
- **Theme Customization**: Allow players to choose different themes and tile designs.


### Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

### DEMO VIDEO
(https://youtu.be/bAOiJGA9fLw?si=obSfaaEyF5Whadj5)

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Author
**Name:** Aditya Gupta  
**Semester:** 2nd  
**Email:** adityagupta1536@gmail.com
