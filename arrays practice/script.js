//arrays

//pratice 1

let arr =["apple","banana","mango"];

console.log(arr[1]);


//p 2

let fruits=["apple","banana","mango"];

fruits.push("gava");
fruits.unshift("pineapple");


//p 3

let fruit=["apple","banana","mango"];

fruit.pop();
fruit.push("kiwi");


let a=[1,2,3,4,5];

a.pop();

// p4

let colors=["green","blue"];

colors.splice(1,0,"red","brown");


//p 5

let items =[1,2,3,4,5,6];

let newarr = items.slice(1,4);
console.log(newarr);

//p6

let item =[1,2,3,4,5,6];

let n=item.map(function(val){

    return val*val;
});

let b=item.filter(function(val){

    return val>2;
});

let c=item.reduce(function(acc,val){
    return acc+val;
},0);