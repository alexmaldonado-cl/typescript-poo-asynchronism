export class MyService {

  private static instance: MyService | null = null;

  private constructor(public name : string){
  }

  public static create(name: string){
    if(this.instance === null){
      console.log(this.instance);
      this.instance = new MyService(name);
    }

    return this.instance;
  }

  getName(){
    return this.name;
  }

}


const service1 = MyService.create('connect1');
console.log(service1.getName());

const service2 = MyService.create('connect2');
console.log(service2.getName());
