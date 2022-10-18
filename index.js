var randomnumber1= Math.floor((Math.random()*6+1));
var s1="images/dice" + randomnumber1+".png";
document.querySelector(".img1").setAttribute("src",s1);
var randomnumber2= Math.floor((Math.random()*6+1));
var s2="images/dice" + randomnumber2+".png";
document.querySelector(".img2").setAttribute("src",s2);

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").textContent="Player1 wins";
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").textContent="Player2 wins";
}
else
{
  document.querySelector("h1").textContent="Draw";
}
