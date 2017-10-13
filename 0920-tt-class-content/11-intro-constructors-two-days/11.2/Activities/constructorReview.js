function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.isSleeping = false;
    this.happy = false;
    this.getLocation = function() {
        return this.location;
    }
    this.location = {
        "address": address
    }
}

var firstPerson = new Person("Jacob", 27, "Orlando");
var secondPerson = new Person("Sherlock", 97, "221B Baker St");

secondPerson.getLocation();

firstPerson.driving = false;

secondPerson.name = "New Name";

console.log(secondPerson.location.address);
