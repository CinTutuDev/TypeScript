export class Person {
  constructor(public name: string, 
              private address: string = "No Address") {}
}

export class Hero extends Person {
 constructor( public alterEgo: string, public edad: number, public nombreReal: string  ){
  super(nombreReal, 'Badayork');
 }
}


const iroman = new Hero("Pepita", 41, 'Capullita');

console.log({ iroman });
