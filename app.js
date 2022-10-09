let gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let gameContainer = document.getElementById("game-container");
for (let i = 0; i < gameBoard.length; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.id = i;
  gameBoard[i].forEach((el, idx) => {
    row.innerHTML += `
    <div id = 'row${i}col${idx}' class = 'column'>
    `;
  });
  gameContainer.appendChild(row);
}
function handleCellClick() {
  console.log(event.target);

  gameContainer.addEventListener("click", handleCellClick);
}
