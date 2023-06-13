const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const another = new Date(1975, 1, 12) // 0: Enero, 11: December
another.getHours();
another.getTime();
another.toISOString();

console.log(date);
console.log(another);

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

}

const birthday = new MyDate(1975, 3, 2);

console.log(birthday);