class Createpencil{
    constructor(name,company,color,price){
        this.name=name;
        this.company=company;
        this.color=color;
        this.price=price;
        
    }

    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((element)=> {
            if(element.style.color===this.color){
                element.remove();
            }
        });
        
    }
}

let p1=new Createpencil("faizan","dollar","black",30);
let p2=new Createpencil("zafar","dollar","pink",90);

p1.write("hello");
p2.write("hello")
p1.write("hello")
p2.write("hello")
p1.write("hello")
p2.write("hello")
p1.write("hello")
p2.write("hello")
p1.write("hello")
p2.write("hello")