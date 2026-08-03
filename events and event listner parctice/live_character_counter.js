let inp= document.querySelector("input");
let span= document.querySelector("span");
inp.addEventListener("input", function(){

   let left_count= 20 - inp.value.length;
   span.textContent=left_count;

   if(left_count<0){
    span.style.color="red";
   }
   else{
    span.style.color="black";
   }

});