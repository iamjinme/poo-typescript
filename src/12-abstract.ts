import { Animal, Dog } from "./09-protected";

const animal = new Animal('cocodrilo');

const perro = new Dog('firulais', 'José');

abstract class Pet {} // no instancias de esta clase

class Cat extends Pet {} // de esta si podemos

// const mascota = new Pet() da error

const gatito = new Cat();