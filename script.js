console.log("Welcome to Tic Tac Toe");

let backgroundMusic = new Audio('music.mp3');
let gameOver = new Audio('gameover.mp3');
let audioTurn = new Audio('ting.mp3');
let turn = "X";
let reset = document.getElementById('reset');
let isgameOver = false;
let MusicBackground = document.getElementById('MusicBackground');

//Function to change the turn
const changeturn = ()=>{
    return turn === "X"? "0":'X';
};


// function to check for a win  
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let Wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    Wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText ) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + ' Won';
            document.getElementById('gif').style.width = "300px";
            isgameOver = true;
        } 
    })
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
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ; 
            }
        }
    })
});

MusicBackground.addEventListener('click', ()=>{
    if(backgroundMusic.paused){
        backgroundMusic.play();
    }else{
        backgroundMusic.pause();
    };
});