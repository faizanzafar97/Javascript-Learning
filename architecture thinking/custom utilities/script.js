const arr=[1,2,3,4,5];

function mymap(arr,callback){
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        new_arr.push(callback(arr[i],i,arr));
    }
    return new_arr;
}

let newarray=mymap(arr,function(val){

    return val+2;

});

console.log(newarray);