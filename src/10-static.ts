console.log("Math original", Math.PI);
console.log("Math maximun is", Math.max(3,7,2,9,4));

export class MyMath {
  static readonly PI = 3.1415;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item);
  }
}

const arreglo = [3,7,2,9,4];
console.log("My Math", MyMath.PI);
console.log("My Math maximum is", MyMath.max(...arreglo));
