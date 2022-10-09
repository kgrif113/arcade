let cells = document.getElementsByClassName("cell");
let statusText = document.getElementById("statusText");
let restartButton = document.getElementById("resetBtn");
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currPlayer = "X";
let running = false;

startGame();

function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartButton.addEventListener("click", resetGame);
  statusText.textContent = `${currPlayer}'s turn!`;
  running = true;
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) {
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
}
function updateCell(cell, index) {
  options[index] = currPlayer;
  cell.textContent = currPlayer;
}
function changePlayer() {}
function checkWinner() {}
function resetGame() {}
