import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  player: YT.Player;
  private id: string;
 
    savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
    }
  onStateChange(event){
    console.log('player state', event.data);
  }
}
