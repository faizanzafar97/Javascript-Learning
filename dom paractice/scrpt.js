//dom advance pactice

//let p=document.querySelector("#faizan");
//p.textContent="welcome to sherryains";


// practice

let p= document.querySelector("p");

p.innerHTML="<b>updated</b> by java script";


// how do you get src of image using js 

let img= document.querySelector("img");

console.log(img.src);

console.dir(img.getAttribute("src"));

//


let img1= document.querySelector("img").setAttribute("src","https://wallpapercave.com/fwp-510/wp13907873.jpg");


//creat a new list 
let ul=document.querySelector("ul");
let li=document.createElement("li");

li.textContent="new task";

ul.appendChild(li);