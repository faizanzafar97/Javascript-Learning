//objects 

//practice 1

let a ={
    name: "faizan",
    age: 21,
    isEnrolled : true
};

console.log(a);

//key can be a no. or boolean

let fat={
    true:"yes",

    42 : "answer",
};

console.log(fat[true]);

// dynamiclly aceess

let csd="age";

let bad ={
    name: "faizan",
    age: 21,
    isEnrolled : true
};

console.log(bad[csd]);

//nested

const locations = {
    city: "Bhopal",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};
locations.coordinates.lat;

locations?.coordinates?.lat;

//destructure

let {cit}=locations;
let {lng}=locations.coordinates;

//practice


const user = {
    "first-name": "Harsh",
};

//let { first-name } = user; // ❌ Error 
// so  we do

let {"first-name" : first_name}= user;


// use of for in loop

const course={
    title:"javascript",

    duration :" 4 weeks",
};

for(let key in course){

    console.log(course[key]);
}

//printing by object.entries()

Object.entries(course).forEach(function(val){

    console.log(val[0]+" : "+val[1]);

});

// cloneong nested obj

const obj={info:"hi",
    score:{
        score:80,
    },
};

let newobj=JSON.parse(JSON.stringify(obj));