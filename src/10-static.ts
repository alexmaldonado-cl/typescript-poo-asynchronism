// console.log(Math.PI);
// console.log(Math.max(1, 3, 6, 2, 9));
class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max > item ? max : item);
  }
}


console.log(MyMath.PI);
console.log(MyMath.max(1, 3, 6, 2, 9));
