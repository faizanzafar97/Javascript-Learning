const btn =document.querySelector("button");
const ul=document.querySelector("ul");

//logic code is serprate
function add(n1,n2){

    return n1+n2;

}

//dom code is seprate

btn.addEventListener("click",function(){
    let num1=Math.floor(Math.random()*11);
    let num2=Math.floor(Math.random()*11);
    
    let finaladd=add(num1,num2);

    let li=document.createElement("li");
    li.textContent=finaladd;
    ul.appendChild(li);
})