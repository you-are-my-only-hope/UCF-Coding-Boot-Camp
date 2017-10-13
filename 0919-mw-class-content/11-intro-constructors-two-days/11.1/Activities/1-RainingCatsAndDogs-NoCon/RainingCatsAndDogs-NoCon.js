//CREATES AN OBJECT AND SETS IT TO "dogs"//
var dogs = {
    //CREATES THE PROPERTY "raining" AND SETS IT TO TRUE//
    raining: true,
    //CREATES THE PROPERTY "noise" AND SETS IT TO "Woof!"//
    noise: "Woof!",
    //CREATES THE METHOD "makeNoise" AND MAKES IT SO THAT, WHEN CALED, IT PRINTS dogs.noise//
    makeNoise: function() {
        if (this.raining == true) {
            console.log(this.noise);
        }
    }
}

//CREATES AN OBJECT WITH A SIMILAR LAYOUT TO "dogs" AND SETS IT TO "cats"//
var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if (this.raining == true) {
            console.log(this.noise);
        }
    }
}

//CALLS THE "makeNoise" METHODS FOR BOTH OBJECTS//
dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

//CREATES A FUNCTION CALLED "massHysteria" WHICH TAKES IN BOTH OBJECTS AND PRINTS A MESSAGE TO SCREEN IF ".raining" IS TRUE FOR BOTH OF THEM//
var massHysteria = function(dogs, cats) {
    if (dogs.raining == true && cats.raining == true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

massHysteria(dogs, cats);