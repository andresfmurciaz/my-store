// tipado
const username : string ='nico';
const numero:number =2;

// metodo
const suma = (a:number,b:number)=>{
return a + b;
}
// llamado de metodo
suma(1,2);

// --------------------------------------------------------
// objeto de clase
class persona {

  age:number;
  lastName:string;

  constructor(age:number,lastName:string){
    this.age=age;
    this.lastName=lastName;
  }
}
// otra forma de objeto
class Animal{
  constructor(public raza : string , public name :string){}
}
// ----------------------------------------------------------

// instancio un objeto
const nico = new persona(13,"camilo");
nico.age;

const animal = new Animal("pitbull","juan");
animal.name;






