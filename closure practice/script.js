function count_for_me() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let counter = count_for_me();

console.log(counter());
console.log(counter());

let counter2 = count_for_me();

console.log(counter2());
console.log(counter2());