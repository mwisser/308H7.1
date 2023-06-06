class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }

  eat(food) {
    console.log(`${this.name} is eating ${food}.`);
  }

  purr() {
    console.log(`${this.name} is purring.`);
  }
}

const cat1 = new Cat('Prince', 2, 'orange');
const cat2 = new Cat('Kitty', 3, 'grey');

console.log(cat1);
console.log(cat2);

cat1.sleep();
cat2.eat('tuna');
cat1.purr();
cat2.sleep();

class Pirate {
  constructor(name, age, ship) {
    this.name = name;
    this.age = age;
    this.ship = ship;
  }

  talk() {
    console.log(`My name is ${this.name}!`);
  }

  plunder() {
    console.log(`${this.name} is plundering with the ${this.ship}.`);
  }

  drink() {
    console.log(`${this.name} is drinking some rum.`);
  }
}

const jollyRoger = [
  new Pirate('Jack', 30, 'Jolly Roger'),
  new Pirate('Mike', 25, 'Jolly Roger'),
  new Pirate('Joe', 40, 'Jolly Roger'),
];

const blackPearl = [
  new Pirate('Ed', 35, 'Black Pearl'),
  new Pirate('Ken', 28, 'Black Pearl'),
  new Pirate('John', 45, 'Black Pearl'),
];

jollyRoger.forEach(pirate => {
  console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Ship: ${pirate.ship}`);
  pirate.talk();
  pirate.plunder();
  pirate.drink();
});

blackPearl.forEach(pirate => {
  console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Ship: ${pirate.ship}`);
  pirate.talk();
  pirate.plunder();
  pirate.drink();
});