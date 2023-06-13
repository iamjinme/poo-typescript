export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public toString(): string {
    return `${this.year}-${this.month}-${this.day}:00:00:000Z`;
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

}

const birthday = new MyDate(1975, 4, 2);
birthday.add(5, "years");
console.log(birthday.toString());
