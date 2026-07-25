//if else

function getgrade(score){

    if (score<=100 && score>=90){
        console.log("A+");
    }
    else if(score<=89 &&score>=80){
        console.log("A");

    } 

    else if(score<=79 &&score>=70){
        
        console.log("B");

     } 

     else if(score<=69 &&score>=60){
        
        console.log("C");

     } 

     else if(score<=59 &&score>=33){
        
        console.log("D");

     } 

     else if(score<=32 &&score>=0){
        
        console.log("FAIL");

     } 

     else{

        console.log("invalid marks");

     }



}

console.log(getgrade(57));

// early return pattern

//if else

function getgrade(score){

    if (score<=100 && score>=90)return("A+");
        
    if(score<=89 &&score>=80)return("A");

     if(score<=79 &&score>=70)return("B"); 

      if(score<=69 &&score>=60)return("C");

      if(score<=59 &&score>=33)return("D");

      if(score<=32 &&score>=0) return("FAIL");

     return("invalid marks");



}

console.log(getgrade(84));



//e.g of rock paper scissor logic

function rps(user,computer){

    if (user==="rock" && computer==="scissor") return"user wins";
    if (user==="rock" && computer==="rock") return"no wins";
    if (user==="rock" && computer==="paper") return"computer wins";

    if (user==="scissor" && computer==="paper") return"user wins";
    if (user==="scissor" && computer==="scissor") return"no wins";
    if (user==="scissor" && computer==="rock") return"computer wins";

    if (user==="paper" && computer==="rock") return"user wins";
    if (user==="paper" && computer==="paper") return"no wins";
    if (user==="paper" && computer==="scissor") return"computer wins";

}

console.log(rps("rock","paper"))

//better approuch

function rps(user, computer) {
  if (user === computer) return "draw";

  if (user === "rock" && computer === "scissor") return "user";
  if (user === "scissor" && computer === "paper") return "user";
  if (user === "paper" && computer === "rock") return "user";

  return "computer";
}

console.log(rps("rock", "scissor"));

//switch case 

function rps(user, computer) {
  switch (true) {
    case user === computer:
      return "draw";
    case user === "rock" && computer === "scissor":
    case user === "scissor" && computer === "paper":
    case user === "paper" && computer === "rock":
      return "user";
    default:
      return "computer";
  }
}

console.log(rps("paper", "scissor"));