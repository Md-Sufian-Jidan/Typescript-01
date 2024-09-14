class Person {
    name: string = "brandon";
    static castle: string = "new work"
    saying: string;

    constructor() {
        this.saying = Person.castle
    };

    hello(human: string) {
        console.log('hello ' + human);
    }
};

var ned = new Person();
ned.saying = 'winter is coming'
console.log(Person.castle);
ned.hello("Md")