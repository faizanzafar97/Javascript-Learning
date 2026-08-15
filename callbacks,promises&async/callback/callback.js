// callback hell

function profile_fetch(username,cb){
    console.log("fetching profile...........!");
    setTimeout(()=>{
        cb({id:1,username,age:21,email:"faiza@gmail.com"});
    },2000)
}

function  get_all_posts(id,cb){
    console.log("fetching posts...........!");
    setTimeout(()=>{
        cb({id:id,posts:["hey","hello","good morning"]});
    },2000)
}

function get_saved_posts(id,cb){
    console.log("fetching saved posts...........!");
    setTimeout(()=>{
        cb({id:id,posts:["hey","hello","good morning"]});
    },2000)
}

profile_fetch("harsh",function(data){
    console.log(data);
    get_all_posts(data.id,function(posts){
        console.log(posts);
        get_saved_posts(data.id,function(saved){
            console.log(saved);
        })
    })
})