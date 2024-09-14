interface Stark {
    name: string,
    age?: number, // ? for this it will not give an error
}
function printName(stark: Stark) {
    console.log(stark.name);
    console.log(stark.age);
};

printName({ name: 'education', age: 98 });
printName({ name: 'i do', age: 8 });