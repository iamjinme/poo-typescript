export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log("I did it!");
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
      console.log(`woof from ${this.name}`);
    }
    this.doSomething();
  }

  // You can duplicate father method
  move() {
    console.log("Moving as a dog...");
    // If you need execute father method too
    super.move();
  }
}

const perro = new Dog('Viper', 'Jinme');
console.log(perro.greeting());
perro.move();
perro.woof(4);
console.log('Owner is', perro.owner);
