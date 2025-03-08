const numbers = [1, 2, 3, 4, 5];

let temp = [];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    temp.push(element * 2); // Example operation: multiplying each element by 2
}

// console.log(temp); 
// Output: [2, 4, 6, 8, 10]

const newArray = numbers.map(number => {
    return number;
});

console.log(newArray);