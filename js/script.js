//ввести 2 имя
let name1 = prompt("Name 1?", ""),
    name2 = prompt("Name 2?", "");

let gameMap = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];


let blocks = document.querySelectorAll(".game-space div"),
    gameSpace = document.querySelector(".game-space"),
    nameGamers = document.querySelectorAll(".results-space .gamer-name");

console.log(nameGamers);
nameGamers[0].innerHTML = name1;
nameGamers[1].innerHTML = name2;

function getSymbol() {
    let symbol = 0;
    return function () {
        symbol = +(!symbol);
        if (symbol == 0) {
            return "o";
        } else {
            return "x";
        }
    };
}

function getWinner() {
    if (
        (gameMap[0][0] == "o" && gameMap[0][1] == "o" && gameMap[0][2] == "o") ||
        (gameMap[1][0] == "o" && gameMap[1][1] == "o" && gameMap[1][2] == "o") ||
        (gameMap[2][0] == "o" && gameMap[2][1] == "o" && gameMap[2][2] == "o") ||
        (gameMap[0][0] == "o" && gameMap[1][0] == "o" && gameMap[2][0] == "o") ||
        (gameMap[0][1] == "o" && gameMap[1][1] == "o" && gameMap[2][1] == "o") ||
        (gameMap[0][2] == "o" && gameMap[1][2] == "o" && gameMap[2][2] == "o") ||
        (gameMap[0][0] == "o" && gameMap[1][1] == "o" && gameMap[2][2] == "o") ||
        (gameMap[2][0] == "o" && gameMap[1][1] == "o" && gameMap[0][2] == "o") ||
        (gameMap[0][0] == "x" && gameMap[0][1] == "x" && gameMap[0][2] == "x") ||
        (gameMap[1][0] == "x" && gameMap[1][1] == "x" && gameMap[1][2] == "x") ||
        (gameMap[2][0] == "x" && gameMap[2][1] == "x" && gameMap[2][2] == "x") ||
        (gameMap[0][0] == "x" && gameMap[1][0] == "x" && gameMap[2][0] == "x") ||
        (gameMap[0][1] == "x" && gameMap[1][1] == "x" && gameMap[2][1] == "x") ||
        (gameMap[0][2] == "x" && gameMap[1][2] == "x" && gameMap[2][2] == "x") ||
        (gameMap[0][0] == "x" && gameMap[1][1] == "x" && gameMap[2][2] == "x") ||
        (gameMap[2][0] == "x" && gameMap[1][1] == "x" && gameMap[0][2] == "x")
    )
        return true;
    else
        return false;
}

let currentSymbol = getSymbol();

gameSpace.addEventListener("click", function (event) {
    if (event.target.classList.contains("block") && (event.target.textContent != "o" || event.target.textContent != "x")) {
        let symbol = currentSymbol();
        event.target.firstChild.textContent = symbol;
        console.log(event);
        event.target.style.backgroundColor = "red";
        //добавить в массив 
        let count = 0;
        blocks.forEach((element, index) => {
            if (element.classList == event.target.classList) {
                count = index;
            }
        });
        // console.log(count);
        gameMap[Math.trunc(count / 3)][count % 3] = symbol;
        console.log(gameMap);
        //проверить на выигрыш
        if (getWinner()) {
            alert("Выиграл " + symbol);
        }
    }
});