export class MyDate {

  public year:number;
  public month:number;
  public day:number;

  public constructor(year: number, month: number, day: number)
  {
    this.year  = year;
    this.month = month;
    this.day   = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years'): void {
    if(type === 'days') this.day += amount;
    if(type === 'months') this.month += amount;
    if(type === 'years') this.year += amount;
  }

}

const myDate = new MyDate(2023, 3, 1);
console.log(myDate.printFormat());
myDate.add(1, 'days');
console.log(myDate.printFormat());

myDate.add(2, 'months');
console.log(myDate.printFormat());
