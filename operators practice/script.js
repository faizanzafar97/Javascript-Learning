let x=10;
let y=20;
// and operator
if (x>5 && y<25){

    console.log("true");
}
else
{
    console.log("false");
}

//or operator

if (x>5 || y>25){

    console.log("true");
}
else
{
    console.log("false");
}

//ternory

let score=78;

let grade= score>=90 ?"A":score>=75?"B":score>=60?"C":"fail";

console.log (grade);