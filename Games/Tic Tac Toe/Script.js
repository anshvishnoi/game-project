let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let game = document.querySelector("#new-button");
let msgContain = document.querySelector(".msg-contain");
let msg = document.querySelector("#msg");


let turn= true; 
let count = 0; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
 ];

 const resetgame = () => {
    turn = true;
    count = 0;
    enableBoxes();
    msgContain.classList.add("hide");
  };

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turn) {
        box.innerText = "O";
        turn = false;
      } else {
        box.innerText = "X";
        turn= true;
      }
      box.disabled = true;
      count++;
      let isWinner = checkWinner();
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });

  const gameDraw = () => {
    alert(msg.innerText = `Game was a Draw.`);
    msgContain.classList.remove("hide");
    disableBoxes();
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const showWinner = (winner) => {
    alert(msg.innerText = `Congratulations, Winner is ${winner}`);
    msgContain.classList.remove("hide");
    disableBoxes();
  };

  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

game.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame);