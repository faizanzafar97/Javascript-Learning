// Call Stack (Execution Stack)

// JS single-threaded hai → ek time par ek hi kaam karta hai.
// Jab tum function call karte ho → wo stack ke top pe chala jata hai.
// Function complete hone ke baad stack se nikal jata hai (pop ho jata hai). 

function a(){
    console.log("a");
}

function b(){
    a();
    console.log("b");
}

function c(){
    b();
    console.log("c");
}

c();