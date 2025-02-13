"use strict";

const mogura1 = document.getElementById("mogura1");
const mogura2 = document.getElementById("mogura2");
const mogura3 = document.getElementById("mogura3");
const mogura4 = document.getElementById("mogura4");
const mogura5 = document.getElementById("mogura5");
const pikohan = document.getElementById("piko");
const mogura_NG = "imag/mogura2-1.png";
const mogura_OK = "imag/mogura1.png";
const piko = "imag/piko.png";
const oshimai = document.getElementById("oshimai")
const three = document.getElementById("three")
const two = document.getElementById("two")
const one = document.getElementById("one")
const retry = document.getElementById("retry")
retry.style.visibility = "hidden";
const backToTitle = document.getElementById("back_to_title")
backToTitle.style.visibility = "hidden";
const counter = document.getElementById("count");
let tokuten = 0;
let game_end = false;
pikohan.style.visibility = "hidden";

window.onload = function () {
  setTimeout(start_game,3000);

  setTimeout(noneNum, 1000, three);
  setTimeout(blockNum, 1000, two);
  setTimeout(blockNum, 2000, one);

};

function start_game() {
  console.log("start");
  
  setTimeout(hidden1, 0);
  setTimeout(hidden2, 0);
  setTimeout(hidden3, 0);
  setTimeout(hidden4, 0);
  setTimeout(hidden5, 0);

  setTimeout(stop_game1, 15000)

  function stop_game1() {
    oshimai.style.display = "block";
    setTimeout(stop_game2, 1500)
  }

  function stop_game2() {
    const lay = document.getElementById("layer")
    const shima = document.getElementById("shimaenaga")

    shima.style.display = "block"
    lay.style.display = "block"
    retry.style.visibility = "visible";
    backToTitle.style.visibility = "visible";

    game_end = true;
  }

  retry.onclick = function() {
    window.location.href = 'index_main.html';
  }

  backToTitle.onclick = function() {
    window.location.href = 'index.html';
  }

  mogura1.addEventListener("click", pikopiko);
  mogura2.addEventListener("click", pikopiko);
  mogura3.addEventListener("click", pikopiko);
  mogura4.addEventListener("click", pikopiko);
  mogura5.addEventListener("click", pikopiko);


  mogura1.onclick = function() {
    start_onclick(mogura1);
  }
  mogura2.onclick = function() {
    start_onclick(mogura2);
  }
  mogura3.onclick = function() {
    start_onclick(mogura3);
  }
  mogura4.onclick = function() {
    start_onclick(mogura4);
  }
  mogura5.onclick = function() {
    start_onclick(mogura5);
  }
}

//共通
function start_onclick(moguraNum) {
  let result = moguraNum.getAttribute('src');
  
  if(result === "imag/mogura1.png") {
    count();
  }
  onClick(moguraNum);
}

function count() {
  tokuten++;
  counter.innerHTML = tokuten;
}

function randomSec() {
  return Math.floor(Math.random() * 4) * 1000;
}

function onClick(moguraNum) {
  moguraNum.src = mogura_NG;
  setTimeout(putBackn, 1000, moguraNum);
}

function putBackn(moguraNum) {
  moguraNum.src = mogura_OK;
}

//ピコピコハンマー
function pikopiko(event) {
  let x;
  let xv;
  let y;
  let yv;
  let rect = event.target.getBoundingClientRect();
      x = event.clientX- rect.left;
      y = event.clientY- rect.top;
  pikohan.style.visibility = "visible";
  pikohan.style.position = "absolute";
  if(event.srcElement.id === "mogura1") {
    yv = 105;
    xv = 0;
  } else if(event.srcElement.id === "mogura2") {
    yv = 105;
    xv = 245;
  } else if(event.srcElement.id === "mogura3") {
    yv = 105;
    xv = 493;
  } else if(event.srcElement.id === "mogura4") {
    yv = 218;
    xv = 130;
  } else if(event.srcElement.id === "mogura5") {
    yv = 218;
    xv = 378;
  }
  pikohan.style.top = (y + yv) + "px";
  pikohan.style.left = (x + xv) + "px";
  setTimeout(pikohidden, 250);
}

function pikohidden() {
  pikohan.style.visibility = "hidden";
}

//COUNT DOWN
function noneNum(num) {
  num.style.display = "none";
}

function blockNum(num) {
  num.style.display = "block";
  setTimeout(noneNum, 1000, num);
}

//1
function hidden1() {
  mogura1.style.visibility = "hidden";
  if (game_end == false) {
    setTimeout(visible1, randomSec());
  }
}

function visible1() {
  if (game_end == false) {
    mogura1.style.visibility = "visible";
  }
  setTimeout(hidden1, randomSec());
}

//2
function hidden2() {
  mogura2.style.visibility = "hidden";
  if (game_end == false) {
    setTimeout(visible2, randomSec());
  }
}

function visible2() {
  if (game_end == false) {
    mogura2.style.visibility = "visible";
  }
  setTimeout(hidden2, randomSec());
}

//3
function hidden3() {
  mogura3.style.visibility = "hidden";
  if (game_end == false) {
    setTimeout(visible3, randomSec());
  }
}

function visible3() {
  if (game_end == false) {
    mogura3.style.visibility = "visible";
  }
  setTimeout(hidden3, randomSec());
}

//4
function hidden4() {
  mogura4.style.visibility = "hidden";
  if (game_end == false) {
    setTimeout(visible4, randomSec());
  }
}

function visible4() {
  if (game_end == false) {
    mogura4.style.visibility = "visible";
  }
  setTimeout(hidden4, randomSec());
}

//5
function hidden5() {
  mogura5.style.visibility = "hidden";
  if (game_end == false) {
    setTimeout(visible5, randomSec());
  }
}

function visible5() {
  if (game_end == false) {
    mogura5.style.visibility = "visible";
  }
  setTimeout(hidden5, randomSec());
}
