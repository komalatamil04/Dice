var randomNumber1 = Math.floor (Math.random()*6)+1;
var randomdiceImage = "dice"+ randomNumber1+".png";
var randomImagessource = "images/" + randomdiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagessource);

var randomNumber2 = Math.floor (Math.random()*6)+1;
var randomdiceImage = "dice"+ randomNumber2+".png";
var randomImagessource2 = "images/" + randomdiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagessource2);
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player 1 wins" ;
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draws!";
}
