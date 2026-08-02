//let div= document.querySelector("#f");

//div.addEventListener('mouseover', function(){
//    div.style.backgroundColor="blue";

//});

//div.addEventListener('mouseout', function(){
//    div.style.backgroundColor="red";

//});

let div=document.querySelector("#f");

window.addEventListener("mousemove", function(g){

    div.style.top=g.clientY+"px";
    div.style.left=g.clientX+"px";

});