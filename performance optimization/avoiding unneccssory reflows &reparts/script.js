const ul= document.querySelector("ul");
const space=document.createDocumentFragment();

for(let i=0;i<31;i++){
    const li =document.createElement("li");
    li.textContent=i;
    li.style.color="white";
    space.appendChild(li);
}

ul.appendChild(space);