console.log("Welcome to Tic Tac Toe");


let backgroundMusic = new Audio('music.mp3');
let gameOver = new Audio('gameover.mp3');
let audioTurn = new Audio('ting.mp3');
let reset = document.getElementById('reset');
let turn = "X";

//Function to change the turn
const changeturn = ()=>{
    
    return turn === "X"? "0":'X';
};


// function to check for a win  
const checkWin = ()=>{

};

// Game logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if  (boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ; 
        }
    })
})