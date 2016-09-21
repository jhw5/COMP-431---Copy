/**
 * Created by Jeffrey on 9/6/2016.
 */



function movingButt(){
    var buttonText = document.getElementById("button");
    if (buttonText.textContent == "Click Me" && !event.shiftKey){
        buttonText.style.left=Math.round(Math.random()*1000) +"px";
        buttonText.style.top=Math.round(Math.random()*600)+"px";
    }
}

function congratulations(){
    var buttonText = document.getElementById("button");
    if (buttonText.textContent=="Click Me"){
        buttonText.textContent="Play Again";
        document.getElementById("congratulations").style.display="block";
    } else {
        buttonText.textContent="Click Me";
        document.getElementById("congratulations").style.display="None";
        buttonText.style.left=Math.round(Math.random()*1000) +"px";
        buttonText.style.top=Math.round(Math.random()*600)+"px";
    }
}