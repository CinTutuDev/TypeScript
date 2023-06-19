export class Person {
  constructor(public firstName: string,
   public lastName: string,
   private address: string = "No Address") {}
}

/* export class Person {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    
  }
} */

export class Hero {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string,
    public person: Person
  ) {}
}

const personita = new Person("Caracolita",'Fernandez', "Júpiter");
const iroman = new Hero("Pepita", 41, "Capullita",personita);

console.log({ iroman });
console.log({ personita });
