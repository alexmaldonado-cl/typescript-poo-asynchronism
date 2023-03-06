export class Animal {

  public constructor(protected name: string){
  }

  public move(){
    console.log("Moving along!");
  }

  public gretting(){
    return `Hello, I am ${this.name}`;
  }

  protected doSomething(){
    console.log("Doooooing!!");;
  }
}

export class Dog extends Animal {

  public constructor(name: string, public owner: string){
    super(name);
  }

  public woof(times: number){
    for (let index = 0; index < times; index++) {
      console.log(`!woof ${this.name}`);
    }
    this.doSomething();
  }

  public move(): void {
    console.log("Moving as a dog");
    super.move();
  }

}

const snoopy = new Dog('Snoopy', 'Alex');
// console.log(snoopy.gretting());
// snoopy.name = 'Scooby Doo';
snoopy.woof(1);
// console.log(snoopy.owner);
snoopy.move();

