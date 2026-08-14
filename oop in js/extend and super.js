class User {
    constructor(name, address, username, email, color) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
        this.color = color;
    }
    checkrole(){
        return `you are a ${this.role}`;
    }

    write(text) {
        let h1 = document.createElement("h1");

        h1.textContent = `${this.name}: ${text}`;

        h1.style.color = this.color;

        document.body.appendChild(h1);
    }

    
}
class Admin extends User{
    constructor(name, address, username, email, color){
        super(name, address, username, email, color);
        this.role="admin";
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }

}

let u1 = new User(
    "faizan",
    "moh islamabad",
    "faizan804",
    "f@gmail.com",
    "black"
);

let u2 = new User(
    "faizan",
    "moh islamabad",
    "faizan804",
    "f@gmail.com",
    
    "blue"
);

let u3 = new User(
    "faizan",
    "moh islamabad",
    "faizan804",
    "f@gmail.com",
    
    "pink"
);

let u4 = new User(
    "faizan",
    "moh islamabad",
    "faizan804",
    "f@gmail.com",
    
    "red"
);

let u5 = new User(
    "faizan",
    "moh islamabad",
    "faizan804",
    "f@gmail.com",
    
    "brown"
);

let a=new Admin(   "faizan",
    "moh islamabad",
    "faizan804",
    "f@gmail.com",
    "yellow")


let users = [u1, u2, u3, u4, u5];

for (let i = 0; i < users.length; i++) {
    users[i].write("hi how are you");
   
    console.log(users[i]);
}
console.log(a);
a.write("hi i am admin");
