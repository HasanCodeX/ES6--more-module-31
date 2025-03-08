const person = {
    name: 'John Doe',
    age: 25
};
const { name, age } = person;
const [first, second] = friends;

const newFriends = [...friends, 'Mike'];

console.log(`Name: ${name}, Age: ${age}`);
console.log(`Friends: ${newFriends}`);