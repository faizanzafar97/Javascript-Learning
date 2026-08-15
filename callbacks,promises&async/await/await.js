let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        let random=Math.floor(Math.random()*10);
        if(random>=5) res("resolved with " + random);
        else rej("rejected with "+random);
    })
});

async function na() {
    try{
        let val =await pr;
        console.log(val);
    }
    catch(err){
        console.log(err);
    }
    
}

na();