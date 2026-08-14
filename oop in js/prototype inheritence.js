//ek object hai app chaaho to uski saare mrthods 
// ko inherit kar ksta ho 

let coffee ={
    color :"dark",
    drink: function(){
        console.log("drinking.........!");
    }
};

let cappacinno=Object.create(coffee);
cappacinno.taste="bitter";
cappacinno.drink();
console.log(cappacinno); 