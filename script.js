let gamePattern=[];
let buttonColours=["red","blue","green","yellow"];
let userClickedPattern=[];
let level=0;
let started=true;

$(".btn").click(function(){
   let userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(this);
let lastIndex=userClickedPattern.length-1;
checkAnswer(lastIndex);

})

function nextSequence(){
 userClickedPattern=[];
let randomNumber=Math.floor(Math.random()*4);
let randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
level++;
$("h1").text("Level " + level);

}



function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
$(currentColor).addClass("pressed");
setTimeout(function(){
$(currentColor).removeClass("pressed")
},100);
}

$(document).on("keypress",function(){
if(started === true){
    nextSequence();
}
started=false;
})

function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){



if(userClickedPattern.length===gamePattern.length){
setTimeout(function(){
userClickedPattern=[];
nextSequence();
},1000)
}

}

else
{
 $("body").addClass("game-over")
 playSound("wrong");
 $("h1").text("Game Over, Press Any Key to Restart");
startOver();
setTimeout(function(){
$("body").removeClass("game-over")
},2000)
}

}

function startOver(){
    level=0;
    started=true;
    gamePattern=[];
}