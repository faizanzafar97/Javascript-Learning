let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        let random=Math.floor(Math.random()*10);
        if(random>=5) res("resolved with " + random);
        else rej("rejected with "+random);
    })
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
});