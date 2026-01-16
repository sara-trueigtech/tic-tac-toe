const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");

let cur = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", ""];

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);    
});

function handleClick(e) {
    const cell = e.target;
    const i = cell.getAttribute("data-index");

    if(board[i] !== "" || !gameActive)
    {
        alert("Invalid move. Please choose another cell.");
        return;
    }

    board[i] = cur;
    cell.textContent = cur;

    checkWinner();
}