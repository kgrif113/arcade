const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#resetBtn");
const player1 = prompt("What is player 1's name?");
const player2 = prompt("What is player 2's name?");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let O = [`${player1}`, "url('O.png')"];
let X = [`${player2}`, "url('X.png')"];
let options = ["", "", "", "", "", "", "", "", ""];

let currPlayer = O;
let running = false;

startGame();

function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartButton.addEventListener("click", resetGame);
  statusText.textContent = `${currPlayer[0]}'s turn!`;
  running = true;
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] != "" || !running) {
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
  changePlayer();

  console.log(options);
}
function updateCell(cell, index) {
  options[index] = currPlayer[0];
  const boxId = document.getElementsByClassName("cell")[index];
  boxId.style.backgroundImage = currPlayer[1];
}
function changePlayer() {
  // currPlayer = currPlayer == X ? O : X;
  if (!options.includes("")) {
    statusText1.textContent = `Bruh, that's a draw.`;
    running = false;

    // currPlayer = currPlayer == O ? X : O;

    // statusText.textContent = `${currPlayer[0]} wins!`;
  } else if (statusText.textContent != `${currPlayer[0]} wins!`) {
    currPlayer = currPlayer == O ? X : O;
    statusText.textContent = `${currPlayer[0]}'s turn`;
  }
  // statusText.textContent = `${currPlayer[0]}'s turn`;
}
function checkWinner() {
  let foundAWinner = false;
  const statusText1 = document.querySelector("#statusText");
  for (let i = 0; i < winConditions.length; i++) {
    const currCond = winConditions[i];
    const cellA = options[currCond[0]];
    const cellB = options[currCond[1]];
    const cellC = options[currCond[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      foundAWinner = true;
      break;
    }
  }
  if (foundAWinner) {
    console.log(currPlayer[0]);
    statusText1.textContent = `${currPlayer[0]} wins!`;
    running = false;
  } else if (!options.includes("")) {
    statusText1.textContent = `Bruh, that's a draw.`;
    running = false;
  }
}
function resetGame() {}
