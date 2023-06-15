export class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string,
  ) {
    super(name);
  }

  woof(times: number) {
    for(let index = 0; index <= times; index++) {
      console.log("woof");
    }
  }
}

const perro = new Dog('Viper', 'Jinme');
console.log(perro.greeting());
perro.move();
perro.woof(4);
console.log('Owner is', perro.owner);
