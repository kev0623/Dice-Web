document.querySelectorAll("img")[0].setAttribute("src","./images/dice6.png")
document.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png")
var random_1 = Math.floor(Math.random()*6)+1;
var random_2 = Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+random_1+".png")
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+random_2+".png")
if(random_1>random_2){
    document.querySelector("h1").textContent="🚩Player1 Win";
}else if(random_1===random_2){
    document.querySelector("h1").textContent="Tie";
}else{
    document.querySelector("h1").textContent="Player2 Win🚩";
}
document.querySelector("")








