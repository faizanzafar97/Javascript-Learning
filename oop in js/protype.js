function Createpencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

Createpencil.prototype.write = function(text) {
    let h1 = document.createElement("h1");

    h1.textContent = text;
    h1.style.color = this.color;
    document.body.style.backgroundColor="black"
    document.body.append(h1);
};

let a = new Createpencil("my pencil", 20, "blue", "dollar");
let a1 = new Createpencil("pencil", 90, "red", "faizan");

console.log(a);
console.log(a1);

a.write("heeloo");
a1.write("Hello from pencil 2");