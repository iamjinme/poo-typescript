export class MyDate {

  constructor(
    // You should add command: private/public/protected
    public year: number, 
    public month: number = 12,
    private day: number = 31
  ) {}

}

const birthday = new MyDate(1975, 3, 2);
console.log(birthday);
const another = new MyDate(2000);
console.log(another);