// simple oop quetion

function Createpencil(name,price,color,company){

    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;

}
let a=new Createpencil("my pencil",20,"black","dollar");
let a1=new Createpencil("pencil",90,"black","faizan");
console.log(a);
console.log(a1);

//method oop e.g.

//constructor function

function Createpencil(name,price,color,company){

    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
    this.write=function(text){
        let h1 =document.createElement("h1");
        h1.textContent=text;
        h1.style.color=color;
        document.body.append(h1);
    }

}
let b=new Createpencil("my pencil",20,"black","dollar");
let b1=new Createpencil("pencil",90,"red","faizan");
console.log(b);
console.log(b1);

b.write("what's app");
b1.write("i am fine");


//