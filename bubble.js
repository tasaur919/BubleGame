function bubble(){
    var clutter="";
for(var i=1;i<=167;i++){
    var r = Math.floor(Math.random()*10)
    clutter+=`<div class="Bubble">${r}</div>`;
}
document.querySelector(".btom").innerHTML=clutter;
}
var timer=60;
var score=0;
var rn=0;
function getscore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;

}
function hit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}
function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".btom").innerHTML=`<h1 text-align="center">Game Over</h1>`;
        }
    },1000);

}
document.querySelector(".btom").addEventListener("click",function(dets){
var clickednumber=Number(dets.target.textContent);
if(clickednumber===rn){
    getscore();
    bubble();
    hit();
}
});
runTimer();
bubble();
hit();