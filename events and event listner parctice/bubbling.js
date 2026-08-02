// document.querySelector("#grandparent").addEventListener("click", function (e) {
//    alert("clicked");
// });

// let ul=document.querySelector("ul");

// ul.addEventListener("click", function(e){
    
//     // e.target.style.textDecoration="line-through";
   
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("lt");
//     }

// });

// event capturing


let a=document.querySelector(".a");
let b=document.querySelector(".b");
let c=document.querySelector(".c"); 
let btn=document.querySelector("button");

btn.addEventListener("click", function(e){
    console.log("button clicked");
    
});

c.addEventListener("click", function(e){
    console.log("c clicked");   
});

b.addEventListener("click", function(e){
    console.log("b clicked");   
});

a.addEventListener("click", function(e){
    console.log("a clicked");   
},true);
