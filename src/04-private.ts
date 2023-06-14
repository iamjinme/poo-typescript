export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Explicit public, not necessary
  public toString(): string {
    return `${this.year}-${this.addPadding(this.month)}-${this.addPadding(this.day)}:00:00:000Z`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  // By defaut is public
  add(amount: number, type: 'days' | 'months' | 'years') {
    // TODO: check if possible add amount and leap year
    if (type === 'days') {
      this.day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }

}

const birthday = new MyDate(1975, 4, 2);
birthday.add(5, "years");
console.log(birthday.toString());
console.log("Day is", birthday.getDay());