
var s=document.getElementById("time-btns")
var t=new Date().toLocaleTimeString();
s.innerHTML=t;

var t;

function onfunction(){
 t= setTimeout(mainDiv,5000)
}
function mainDiv(){
  document.getElementById("loadAni").style.display="none";
  document.getElementById("mainSec").style.display="block";
}

function show() {
    var reveals = document.querySelectorAll(".show");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
window.addEventListener("scroll", show);

setInterval(function(){
  
var time=new Date().getTime();
var day=Math.floor( time /(1000*60*60*24) );
var hours=Math.floor( ( time/(100*60*60*24))/(1000*60*60));
var minutes=Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((time % (1000 * 60)) / 1000);
  document.getElementById("timerc").innerHTML=
  hours+"1h "+minutes+"m "+seconds+"s ";
  
},1000)