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
}
function updateCell(cell, index) {
  const boxId = document.getElementsByClassName("cell")[index];
  console.log(boxId);
  options[index] = currPlayer;
  boxId.style.backgroundImage = currPlayer[1];
}
function changePlayer() {}
function checkWinner() {}
function resetGame() {}
