import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  counter = 0;
  evenValues: number[] = [];
  oddValues: number[] = [];

  ngOnInit(){
  }
  generateChild(event: number){
    if(event % 2 === 0){
      console.log('even', event);
      this.evenValues.push(event);
    }else{
      console.log('odd', event);
      this.oddValues.push(event);
    }
  }
}