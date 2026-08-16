class Youtubechannel{
    constructor(){
     this.subscribers=[];   
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name},you have subscribe the channel`);
    }
    unsubscribe(user){
        this.subscribers=this.subscribers.filter((sub)=> sub!==user);
        user.update(`${user.name},you have un-subscribe the channel`);
    }
    notify(message){
        this.subscribers.forEach((sub)=> sub.update(message))
    }
}

class user{
    constructor(name){
      this.name=name;  
    }
    update(data){
        console.log(`${this.name},${data}`);
    }
}

let cheema=new Youtubechannel();
let u1=new user("faizan");

cheema.subscribe(u1);
cheema.unsubscribe(u1);

cheema.notify("we are live to day  at 5 am ");