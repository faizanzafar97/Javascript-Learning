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