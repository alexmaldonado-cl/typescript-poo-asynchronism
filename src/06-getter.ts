export class MyDate {



  public constructor(
    private _year:number = 2023,
    private _month:number = 3,
    private _day:number = 3
  ){}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this._year}`;
  }

  private addPadding (value: number) {
      if (value < 10) return `0${value}`;

      return `${value}`;
  }


  public add(amount: number, type: 'days' | 'months' | 'years'): void {
    if(type === 'days') this._day += amount;
    if(type === 'months') this._month += amount;
    if(type === 'years') this._year += amount;
  }

  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean{
    if(this._year % 400 === 0) return true;
    if(this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }

}

const myDate = new MyDate(2023, 3, 1);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);
