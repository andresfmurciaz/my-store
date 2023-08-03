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
}
