export class Animal {

  public constructor(public name: string){
  }

  public move(){
    console.log("Moving along!");
  }

  public gretting(){
    return `Hello, I am ${this.name}`;
  }
}

export class Dog extends Animal {

  public constructor(name: string, public owner: string){
    super(name);
  }

  public woof(times: number){
    for (let index = 0; index < times; index++) {
      console.log("Woof");
    }
  }

}

const snoopy = new Dog('Snoopy', 'Alex');
snoopy.move();
console.log(snoopy.gretting());
snoopy.woof(10);
console.log(snoopy.owner);
