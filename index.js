var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceimg = "dice" + randomNumber1 + ".png";

var dicesrc = "images/" + diceimg;

document.querySelectorAll("img")[0].setAttribute("src",dicesrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceimg1 = "dice" + randomNumber2 + ".png";

var dicesrc1 = "images/" + diceimg1;

document.querySelectorAll("img")[1].setAttribute("src",dicesrc1);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Its a Draw";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}

