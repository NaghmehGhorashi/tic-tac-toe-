
const cells = document.querySelectorAll(".cell");
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],];

let currentPlayer = "X";

const handleclick = (e) => {
    const cell = e.target;
    const index = cell.dataset.index;
    if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} Wins`);
            resetGame();
        }
        else if (isDraw()) {
            alert("It's Draw");
        }
        else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
};

const checkWin = () => {
    return winningCombination.some((combination) => {
        return combination.every((index) => 
            { return cells[index].textContent === currentPlayer; });
    });
}

const isDraw = () => {
    return [...cells].every((cell) => cell.textContent !== "");
}

const resetGame = () => {

    cells.forEach((cell) => (cell.textContent = ""));
    currentPlayer = "X";
};

cells.forEach((cell) => cell.addEventListener("click", handleclick));