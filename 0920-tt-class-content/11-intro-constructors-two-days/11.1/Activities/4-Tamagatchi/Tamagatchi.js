//CONSTRUCTOR FUNCTION WHICH CAN BE USED TO CREATE "DigitalPal" OBJECTS//
var DigitalPal = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    //METHOD WHICH FEEDS THE DigitalPal WHEN THEY ARE HUNGRY AND SETS THEM TO SLEEPY//
    this.feed = function() {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks, I'm full.");
        }
    };

    //METHOD WHICH PUTS THE DigitalPal TO SLEEP WHEN THEY ARE SLEEPY, INCREASES THEIR AGE BY ONE, AND SETS THEM TO BORED//
    this.sleep = function() {
        if (this.sleepy === true) {
            console.log("ZZzzZZZzzzZZz~~");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired!")
        }
    };

    //METHOD WHICH ALLOWS THE USER TO PLAY WITH THEIR DigitalPal WHEN THEY ARE BORED AND SETS THEM TO HUNGRY//
    this.play = function() {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Maybe later?");
        }
    };

    //METHOD WHICH IS CALLED IN "this.sleep" TO INCREASE THE AGE OF THE DigitalPal BY ONE//
    this.increaseAge = function() {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " old!");
    };
};

//CREATES A NEW "DigitalPal" OBJECT WITH THE NAME "dog"//
var dog = new DigitalPal();

//ADDS THE PROPERTY "outside" TO THE "dog" OBJECT AND SETS IT TO FALSE//
dog.outside = false;

//ADDS THE METHOD "bark" TO THE "dog" OBEJECT WHICH PRINTS A MESSAGE TO THE SCREEN//
dog.bark = function() {
    console.log("Woof! Woof!");
}

//ADDS THE METHOD "letOutside" TO THE "dog" OBEJECT WHICH LETS "dog" OUTSIDE WHEN IT IS INSIDE//
dog.letOutside = function() {
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
}

//ADDS THE METHOD "letInSIDE" TO THE "dog" OBEJECT WHICH LETS "dog" INSIDE WHEN IT IS OUTSIDE//
dog.letInside = function() {
    if (this.outside === true) {
        console.log("Awwww... Do I have to?");
        this.outside = false;
    } else {
        console.log("We're already inside though...")
    }
}

//CREATES A NEW "DigitalPal" OBJECT WITH THE NAME "cat"//
var cat = new DigitalPal();

//ADDS THE PROPTERY "houseQuality" TO THE "cat" OBJECT//
cat.houseQuality = 100;

//ADDS THE "meow" METHOD TO THE "cat" OBJECT WHICH PRINTS A MESSAGE TO THE SCREEN//
cat.meow = function() {
    console.log("Meow! Meow!");
}

//ADDS THE "destroyFurniture" METHOD TO THE "cat" OBJECT WHICH DECREASES THE "cat.houseQuality" VALUE BY TEN//
cat.destroyFurniture = function() {
    if (this.houseQuality - 10 > 0) {
        this.houseQuality -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    } else {
        console.log("I've already destroyed it all!");
    }
}

//ADDS THE "buyNewFurniture" METHOD TO THE "cat" OBJECT WHICH INCREASES THE "cat.houseQuality" VALUE BY FIFTY//
cat.buyNewFurniture = function() {
    this.houseQuality += 50;
    console.log("Are you sure that's a good idea?");
}

//CODE DOES NOT INCLUDE CALLS FOR THE PROGRAM AS OF YET, BUT ALL OBJECTS AND METHODS ARE FULLY FUNCTIONAL//