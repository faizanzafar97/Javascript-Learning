//functions

//hosting

barking();


function barking(){

    console.log("dog barks");
}

//fat arrow fuction

let add=(a,d)=>{
    return a*d;

}

console.log(add(1,5));




//use of rest operator


function a(...val){

    console.log(val);

}

a(1,2,3,4,5,6,7);


//practice question


function getscore(...val){

    let total=0;

    val.forEach(function(val1){
        total=total+val1;

    })

    return total;
    
}


console.log(getscore(12,22,32,42,52,62,65));