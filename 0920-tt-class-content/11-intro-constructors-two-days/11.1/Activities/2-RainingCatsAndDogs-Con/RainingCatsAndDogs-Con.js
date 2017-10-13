//CONSTRUCTOR WHICH CAN BE USED TO CREATE OBJECTS WITH THE ".raining", ".noise", and ".makeNoise" PROPERTIES//
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if (this.raining == true) {
            console.log(this.noise);
        }
    }
}

//SETS THE VARIABLES "dogs" AND "cats" TO BE ANIMAL OBJECTS//
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
    if (dogs.raining == true && cats.raining == true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

massHysteria(dogs, cats);