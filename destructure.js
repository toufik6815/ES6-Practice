// const person = {name: 'Toufik', number: 01679759284, age: 71};
// const name = person.name;
// const age = person.age;
// console.log(name, age);











// const person = { name: 'Toufik', number: "01679759284", age: 71 };
// const { number, name } = person;
// console.log(number, name);






// const friends = ['abc', 'def', 'hij', 'klm', 'nop'];
// const [firstFriend, ...othersF] = friends;
// console.log(othersF);










const complexObject = {
    info: {
        address: 'South'
    }
}

const { address } = complexObject.info;
console.log(address);
