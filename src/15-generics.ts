import { Dog } from "./08-inheritance";

function getValue<T>(value: T) { //*Usar T es una convención para tus propios tipados
  return value;
}

getValue<number>(12).toFixed()
getValue<string>('12').length
getValue<boolean>(true).toString()

const doggy = new Dog('doggy', 'Snoop dog')
getValue<Dog>(doggy)


class Generica<T> {
  // Se define una propiedad de tipo función generica
  suma?: (x: T, y: T) => T;
}

// Se instancia y se le da la funcionalidad
let instanciaArray = new Generica<(string | number)[]>();

instanciaArray.suma = function(x, y) {
  return [...x, ...y];
}

let variableArray = instanciaArray.suma(['a','b','c'] , ['1','2','3']);
console.log(variableArray);
