class Human {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    dance() {
        console.log(this.name + " is dancing");
    }
}

const person = new Human("Sufian");
person.dance();

class AwesomePerson extends Human {
    dance() {
        console.log("so Awesome");
        super.dance();
    }
}

const rob = new AwesomePerson("Jidan");
rob.dance()