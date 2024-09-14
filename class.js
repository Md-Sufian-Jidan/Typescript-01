var Person = /** @class */ (function () {
    function Person() {
        this.name = "brandon";
        this.saying = Person.castle;
    }
    ;
    Person.prototype.hello = function (human) {
        console.log('hello ' + human);
    };
    Person.castle = "new work";
    return Person;
}());
;
var ned = new Person();
ned.saying = 'winter is coming';
console.log(Person.castle);
ned.hello("Md");
