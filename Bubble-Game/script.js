var timer =60;
var score=0;
var hitnum=0;
function increaseScore(){
   score +=5;
   document.querySelector("#scoreval").textContent=score;
}

function HitRandom(){
    hitnum = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitnum;
}

function makeBubble(){
    var clutter="";
        for(var i=1; i<=102; i++){
            var ran =Math.floor(Math.random()*10);
            clutter +=`<div class="bubble">${ran}</div>`
        }
document.querySelector(".pbottom").innerHTML =clutter;
}
function runTimer(){ 
   var timerint= setInterval(function(){
        if(timer >0){
            timer --;
        document.querySelector("#timerval").textContent =timer;
        }
        else{
             clearInterval(timerint);
             document.querySelector(".pbottom").innerHTML=`<h1> Game OVer <h1>`;
        }
     }, 1000);
}
runTimer()

makeBubble();
HitRandom();

document.querySelector(".pbottom")
.addEventListener("click", function(dets){
    var clickNum =Number(dets.target.textContent);
    if(clickNum === hitnum){
        increaseScore()
        makeBubble()
        HitRandom();
    }
})