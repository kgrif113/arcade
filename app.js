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
  console.log(cellIndex);
  if (options[cellIndex] != "" || !running) {
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
  changePlayer();
}
function updateCell(cell, index) {
  const boxId = document.getElementsByClassName("cell")[index];
  console.log(boxId);
  options[index] = currPlayer[0];
  boxId.style.backgroundImage = currPlayer[1];
  console.log(options);
}
function changePlayer() {
  currPlayer = currPlayer == X ? O : X;
  statusText.textContent = `${currPlayer[0]}'s turn`;
}
function checkWinner() {
  let foundAWinner = false;

  for (let i = 0; i < winConditions.length; i++) {
    const currCond = winConditions[i];
    const cellA = options[currCond[0]];
    const cellB = options[currCond[1]];
    const cellC = options[currCond[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      let foundAWinner = true;
      break;
    }
  }
  if (foundAWinner) {
    statusText.textContent = `${currPlayer[0]} wins!`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = `Draw :(`;
    running = false;
  }
}
function resetGame() {}
