export class MyDate {

  constructor(
    // You should add command: private/public/protected
    public year: number, 
    public month: number = 12,
    private _day: number = 31
  ) {}

  get day() {
    return this._day;
  }

  // We recreate a function as a property
  get isLeapYear(): boolean {
    const { year } = this;
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }
}

const birthday = new MyDate(1975, 3, 2);
console.log(birthday);
const another = new MyDate(2000);
console.log("Day is", another.day);
console.log("Is Leap?", another.isLeapYear);