import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name :string= 'nicolas';
  age :number=23;
  estadoButt:boolean=true;

  person={

    name:'camila',
    age:19
  }

  actiDesa(){
  this.estadoButt=!this.estadoButt

  }


  aumentarEdad(){
    this.person.age= this.person.age+1;
  }

  leerScroll(event:Event){
const elemnto = event.target as HTMLElement;
console.log(elemnto)
}

leerInput(event:Event){
  const elemnto = event.target as HTMLInputElement;
this.person.name=elemnto.value;
console.log(elemnto.value)
}

}
