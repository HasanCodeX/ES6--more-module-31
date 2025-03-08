const person = {
    name: 'John Doe',
    age: 25,
    friends: ['Jane', 'Jack'],
    details: {
        job: 'Developer',
        company: 'Google',
        status: "Single"
     
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.friends);
console.log(person.details.job);
console.log(person.details.company);
console.log(person['details']['status']);
console.log(person.details.status);