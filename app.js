const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#resetBtn");
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

let O = ["O", "url('O.png')"];
let X = ["X", "url('X.png')"];
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
  changePlayer();
  checkWinner();
  console.log(options);
}
function updateCell(cell, index) {
  options[index] = currPlayer[0];
  const boxId = document.getElementsByClassName("cell")[index];
  boxId.style.backgroundImage = currPlayer[1];
}
function changePlayer() {
  // currPlayer = currPlayer == X ? O : X;
  if (statusText.textContent != `${currPlayer[0]} wins!`) {
    currPlayer = currPlayer == X ? O : X;
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
  } else {
  }
}
function resetGame() {}
