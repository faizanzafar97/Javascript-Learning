// let count=0;

// let progress=document.querySelector("#progress-fill");
// let percentage=document.querySelector("#percentage");
// let progressstats=document.querySelector(".progress-stats");

// let st=setInterval(()=>{
//     if(count<=100){
//         progress.style.width=`${count}%`;
//         percentage.textContent=`${count}%`;
//         count++;
//     }

//     else{
//         progressstats.innerHTML="<span>Download Complete</span>";
//         clearInterval(st);
//     }    
// },1000/10);


let sec=10;
let div=document.querySelector(".progress-wrapper");

let st=setInterval(()=>{
    div.style.display="none";
},sec*1000/100);