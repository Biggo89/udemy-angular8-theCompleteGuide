import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GameComponent } from './assignment5/game/game.component';
import { OddComponent } from './assignment5/odd/odd.component';
import { EvenComponent } from './assignment5/even/even.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GameComponent, OddComponent, EvenComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
