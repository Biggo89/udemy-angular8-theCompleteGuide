import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output()myEvent = new EventEmitter<number>();
  counter = 0;
  intervalRef: any;
  constructor() { }

  ngOnInit() {
  }

  start(){
    this.intervalRef = setInterval( () => {
      this.counter += 1;
      console.log(this.counter);
      debugger;
      this.myEvent.emit(this.counter);
      }, 1000 );
  }
  stop(){
    clearInterval(this.intervalRef);
  }
}