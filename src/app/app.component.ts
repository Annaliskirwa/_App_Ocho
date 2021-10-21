import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  query!: string
  artist: any

  showArtist(item:any){
    
    this.query = item.name;
    item.highlight = !item.highlight
  }

  constructor(){
    this.query = ""
    this.artist = []; 
    
  }}
