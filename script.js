console.log("Welcome to Tic Tac Toe");

let backgroundMusic = new Audio("music.mp3");
let gameOver = new Audio("gameover.mp3");
let audioTurn = new Audio("ting.mp3");
let turn = "X";
let reset = document.getElementById("reset");
let isgameOver = false;
let MusicBackground = document.getElementById("MusicBackground");

//Function to change the turn
const changeturn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check for a win
const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let Wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  Wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
      boxText[e[0]].innerText + " Won";
      document.getElementById("gif").style.width = "200px";
      document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector('.line').style.width = `20vw`;
      isgameOver = true;
      gameOver.play().catch((e) => {
        console.log("Game over sound play blocked:", e);
      });
    }
  });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === ""  && !isgameOver) {
      boxText.innerText = turn;
      turn = changeturn();
      audioTurn.play().catch((e) => {
        console.log("Turn sound play blocked:", e);
      });
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

MusicBackground.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play().catch((e) => {
      console.log("Background music play blocked:", e);
    });
  } else {
    backgroundMusic.pause();
  }
});

reset.addEventListener("click", () => {
  let boxTexts = document.getElementsByClassName("boxText");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  document.getElementById("gif").style.width = "0px";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.line').style.width = `0vw`;
  
});
