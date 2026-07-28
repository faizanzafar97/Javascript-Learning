// Practice of Event Listener

let h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
    h1.style.color = "red";
});

let p = document.querySelector("p");

function changeBackground() {
    p.style.backgroundColor = "black";
    p.style.color = "white";
    p.style.padding = "10px";
}

p.addEventListener("click", changeBackground);

// Input event
let input = document.querySelector("input");

if (input) {
    input.addEventListener("input", function (a) {
        if(a.data!==null) console.log(a.data);
    });
}

// Select event
let select =document.querySelector("select");
let device=document.querySelector("#device");

select.addEventListener("change",function(dets){

    
    device.textContent=`You have selected ${dets.target.value}`;   

});