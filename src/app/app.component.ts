import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query!: string;
  artist!: object

  constructor(){
    this.query = "Barot"
  }
}
