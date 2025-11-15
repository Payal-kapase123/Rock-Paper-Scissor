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

function start(Player) {
    let result = Math.floor(Math.random() * arrlen);

    Computer = arraye[result];

    // console.log(Player);
    // console.log(Computer);

    left.innerText = Player;
    right.innerText = Computer;

    if (Player == "scissor" && Computer == "paper" ||
        Player == "stone" && Computer == "scissor" ||
        Player == "stone" && Computer == "paper") {

        console.log("you win");
        msg.innerText ="you win!!!";
        win = win+1;
        wincount.innerHTML = win;
    }
    else if (Player === Computer) {
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