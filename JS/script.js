let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("div"));

let winerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

console.log(boxes)

const o_txt = "O"
const x_txt = "X"
let currentPlayer = x_txt;
let spaces = Array(9).fill(null)
console.log(spaces)

const startGame = () =>{
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e){
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        if(playerWon() != false) {
            playerText.innerText = `${currentPlayer} has Won!` 
            let winning = playerWon();
            winning.map(box => boxes[box].style.background = winerIndicator)
            return
        }
        // if(noonewon == true){
        //     playerText.innerText = `Match is Draw`
        // }
        e.target.innerText = currentPlayer;
        currentPlayer = currentPlayer == x_txt ? o_txt : x_txt;
    }
}
restartBtn.addEventListener('click',restart)
startGame()

const winningcombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerWon(){
    for(const condition of winningcombos){
        let [a,b,c] = condition
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]
        }
        // if(spaces[a]==spaces[b] && spaces[a]==spaces[c]){
        //     return [a,b,c]
        // }
    }
    return false
}

// function noonewon(){
//     if((spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) == false){
//         return
//     }
// }

function restart(){
    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText = ''
        box.style.background = ''
    })
    playerText.innerText = 'Tic Tac Toe Game'
    currentPlayer = x_txt
}