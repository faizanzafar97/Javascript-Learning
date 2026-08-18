let btn= document.querySelector("#btn");

btn.addEventListener("click",async function(){
    let h=await import("./heavy.js");
    h.heavy();
})