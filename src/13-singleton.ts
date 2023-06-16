export class Printer {

  static instance: Printer | null = null;

  private constructor(private name: string) {};

  static create(name: string) {
    if (Printer.instance === null) {
      console.log(Printer.instance);
      Printer.instance = new Printer(name);
    }
    return Printer.instance;
  };

  getName() {
    console.log(this.name);
  }
}

// Doesn't work
// const epson = new Printer("Epson");
// epson.getName();

const citizen = Printer.create("Citizen");
citizen.getName();

const hp = Printer.create("HP");
hp.getName();