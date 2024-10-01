class Animal{
    constructor(name){
        this.name= name;
    }
    eat(){
    console.log(`${this.name} is eating`);
    }
}

 class Dog extends Animal{
    bark(){
        console.log(`${this.name} is barking`);
    }
 }
 const myDog = new Dog ('Buddy');
 myDog.eat();
 myDog.bark();

 //new Encaspsulation

 class car{
    constructor(model, year){
    this.model= model;
    this.year= year;
 }
 getdetails(){
    return `${this.model}-${this.year}`;
 }
}
const mycar = new car(`Toyota`, 2020);
console.log(mycar.getdetails());

//New Abstraction
class phone{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    makecall(number){
        console.log(`calling,${number}`);
    }
    
}
const myphone = new phone(`Apple`,`iPhone15`);
myphone.makecall(`1234567890`);

//new Polymorphism
class shape{
    draw(){
        console.log(`Drawing a shape...`);
    }
}
class circle extends shape {
    draw(){
        console.log(`Drawing a circle...`);
    }
}
class square extends shape{
    draw(){
        console.log(`Drawing a square...`);
    }
}
const shapes = [new shape(), new circle(), new square()];
shapes.forEach(shape=>shape.draw());

//new constructor
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    greet(){
            console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}
const person1 = new person(`Karan`,22);
person1.greet();

// Method overriding
class Gorilla {
    makeSound() {
      console.log(`Some generic animal sound`);
    }
  }
  
  class Puppy extends Gorilla {
    makeSound() {
      console.log(`Bark! Bark!`);
    }
  }
  
  const myGorilla = new Gorilla();
  myGorilla.makeSound();  // Output: Some generic animal sound
  
  const myPuppy = new Puppy();  // Corrected: Added parentheses ()
  myPuppy.makeSound();        // Output: Bark! Bark!
  