
        // 1. Global Scope
        console.log("--- Global Scope ---");
        console.log(this);

        // 2. Function Scope
        function f(){
            console.log("--- Function Scope ---");
            console.log(this);
        }
        f(); 

        // 3. Object Scope
        let a = {
            name: "faizan",
            age: 21,
            s: function(){
                console.log("--- Object Scope ---");
                console.log(this);
            }
        };
        a.s(); 


// event handler
document.querySelector("h2").addEventListener("click",
    function(){
    console.log((this.style.color="red"))
})


//class handler

class abx{
    constructor(){
        console.log("hi");
        this.b=12;
    }  
}
let val=new abx();