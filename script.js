let wincount = document.getElementById("win");
let droncount = document.getElementById("dron");
let loosecount = document.getElementById("loose");

let msg = document.getElementById("msg");
let left = document.getElementById("left-side");
let right = document.getElementById("right-side");


win =0;
dron =0;
loose =0;

let arraye = ["stone", "paper", "scissor"];

let arrlen = arraye.length;


function start(val) {
    let result = Math.floor(Math.random() * arrlen);

    option = arraye[result];

    // console.log(val);
    // console.log(option);

    left.innerText = val;
    right.innerText = option;

    if (val == "scissor" && option == "paper" ||
        val == "stone" && option == "scissor" ||
        val == "stone" && option == "paper") {

        console.log("you win");
        msg.innerText ="you win!!!";
        win = win+1;
        wincount.innerHTML = win;
    }
    else if (val === option) {
        console.log("you dron");
         msg.innerText ="you dron";
        dron = dron+1;
        droncount.innerHTML = dron;
    }
    else {
        console.log("you loose");
         msg.innerText ="you loose";
        loose = loose+1;
        loosecount.innerHTML =loose;
    }
}

function reStart(){
    wincount.innerText =0;
    droncount.innerText =0;
    loosecount.innerText =0;

    msg.innerText = "Playe the game";
    left.innerText ="Plyer";
    right.innerText ="Computer";
}