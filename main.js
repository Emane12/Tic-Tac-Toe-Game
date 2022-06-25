const players = document.querySelector('h2');
document.querySelectorAll(".y").forEach(cell => cell.addEventListener("click", inputSave));
document.querySelector(".tryAgain").addEventListener("click", refresh);

let game = 1;

let player1 = "X";
let cell = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];

const winDisplay = () => window.confirm(`${player1} won the game! 😀`);

const drawDisplay = () =>  window.alert(`Let's try one more time!`);
const turns = () => `Player: ${player1}`;


players.innerHTML = turns();

const solution = [ 
    [0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35], [0, 6, 12, 18, 24, 30], [1, 7, 13, 19, 25, 31], [2, 8, 14, 20, 26, 32], [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34], [5, 11, 17, 23, 29, 35], [0, 7, 14, 21, 28, 35], [5, 10, 15, 20, 25, 30], [30, 25, 20, 15, 10, 5]
];


function click(clickedCell, clickedCellIndex) {
    cell[clickedCellIndex] = player1;
    clickedCell.innerHTML = player1;
}

function playerInput() {
        if (player1 === "X") {
        player1 = "O";
        players.innerText = turns();
    } else {
        player1 = "X";
        players.innerText = turns();
    }
}

function isResult() {
    let trials = false;

    for (let i = 0; i <= 14; i++) {
        const winner = solution[i];
        let a = cell[winner[0]];
        let b = cell[winner[1]];
        let c = cell[winner[2]];
        let d = cell[winner[3]];
        let e = cell[winner[4]];
        let f = cell[winner[5]];

        if (a === "?" || b === "?" || c === "?" || d === "?" || e === "?" || f === "?") {
            continue;
        }
        if (a === b && b === c && c === d && d === e && e === f) {
            trials = true;
            break
        }
    }

    if (trials) {
        players.innerHTML = winDisplay();
        game = false;
        return;
    }

    let draw = !cell.includes("?");
    if (draw) {
        players.innerHTML = drawDisplay();
        game = false;
        return;
    }
    playerInput();
}

function inputSave(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('x'));

    if (cell[clickedCellIndex] !== "?" || !game) {
        return;
    }

    click(clickedCell, clickedCellIndex);
    isResult();
}
function refresh() {
    game = true;
    player1 = "X";
    cell = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];
    players.innerHTML = turns();
    document.querySelectorAll('.y').forEach(cell => cell.innerHTML = "");
}

