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
       
        document.querySelector("h2").addEventListener("click", function(){
            console.log((this.style.color="red"));
        });

        //class handler
        class abx{
            constructor(){
                console.log("hi");
                this.b=12;
            }  
        }
        let val=new abx();

        //call apply bind
        //function ko call karta wqt aap 
        // this ki value set karte hau

        // call

        let obj= {
            name:"faizan",
            age:21,
        };

        function abcd(){
            console.log(this.age);
        }

        abcd.call(obj);

        //apply
    let ob= {
            name:"faizan",
            age:21,
        };

        function bcd(a,b,c){
            console.log(this.age,a,b,c);

        }

        bcd.apply(ob,[1,2,3]);


    //bind
    
       let bj= {
            name:"faizan",
            age:21,
        };

        function abd(){
            console.log(this.age);
        }

        let a = abd.bind(bj,1,2,3  );