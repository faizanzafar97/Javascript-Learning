let form =document.querySelector("form");
let inputs=document.querySelectorAll("input");
form.addEventListener("submit",function(e){

    e.preventDefault();

     let card_container=document.createElement("div");
    card_container.classList.add("card-container");

    let card=document.createElement("div");
    card.classList.add("card"); 

    let img=document.createElement("img");
    img.setAttribute("src",e.target[0].value)
    let h2=document.createElement("h2");
    h3.textContent=e.target[1].value;
    let h4 =document.createElement("h4");
    h4.textContent=e.target[2].value;
    let p=document.createElement("p");

    p.textContent=e.target[3].value;

   
   

});