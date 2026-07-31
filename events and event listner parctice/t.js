let form =document.querySelector("form");
let inputs=document.querySelectorAll("input");
form.addEventListener("submit",function(e){

    e.preventDefault();

    console.log(e.target[0].value,inputs[1].value,inputs[2].value,inputs[3].value);
   

})