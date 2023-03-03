export class MyDate {



  public constructor(
    private year:number = 2023,
    private month:number = 3,
    private day:number = 3
  ){}

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding (value: number) {
      if (value < 10) return `0${value}`;

      return `${value}`;
  }


  public add(amount: number, type: 'days' | 'months' | 'years'): void {
    if(type === 'days') this.day += amount;
    if(type === 'months') this.month += amount;
    if(type === 'years') this.year += amount;
  }

}

const myDate = new MyDate(2023, 3, 1);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log("() => ", myDate2.printFormat());

const myDate3 = new MyDate(2000);
console.log("(2000) =>", myDate3.printFormat());

const myDate4 = new MyDate(2020, 5);
console.log("(2020, 5) =>", myDate4.printFormat());
