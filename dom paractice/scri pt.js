//dom practice 

//selecting an element

let h=document.querySelector("h1");

console.dir(h);

let h1=document.querySelectorAll("h1");

console.dir(h1);


//text access

let p=document.querySelector("p");

p.innerText="hello whats going on ";
p.innerHTML="<i>hey</>";


//attribute maniplate

let a=document.querySelector("a");

a.setAttribute("href","https://www.google.com/");

console.log(a.getAttribute("href"));

a.removeAttribute("href");



//dynamic dom maipulation

let f=document.createElement("h1");

f.textContent="hello how are you  mr no body";

document.querySelector("body").appendChild(f);


let s=document.querySelector("h1");
s.style.color="red";
s.style.fontSize="4em"

s.classList.remove("f")
s.classList.add("hi")
