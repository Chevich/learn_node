function getCounter() {
    let counter = 0;
    return () => {
        return counter++;
    }
}

let count = getCounter();
let count1 = getCounter();
let count2 = getCounter();

console.log(count());
console.log(count());
console.log(count());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count1());
