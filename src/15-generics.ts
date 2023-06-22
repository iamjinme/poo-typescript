import { Dog } from "./08-inheritance";

// Returning unknow type
// function getValue(value: unknown) {
//   return value;
// }

// Return many types
// function getValue(value: number | string) {
//   return value;
// }

// <T> : Type : Generics
function getValue<myType>(value: myType) {
  return value;
}

getValue<number>(12).toString();
getValue<string>('12').toLowerCase();
getValue<number[]>([]).forEach;
const firulais = new Dog('firulais', 'Jinme');
getValue<Dog>(firulais);
