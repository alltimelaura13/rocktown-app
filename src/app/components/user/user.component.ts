import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterComponent } from '../../components/register/register.component';

import { reframe } from 'reframe.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AngularFireDatabase]
})
export class UserComponent implements OnInit {

  
  // player: YT.Player;
  // private id: string = 'qDuKsiwS5xw';

	// savePlayer (player) {
  //   this.player = player;
  //   console.log('video url: ', player.getVideoUrl())
	// }
  // onStateChange(event){
  //   console.log('player state', event.data);
  // }

  // public YT: any;
  // public video: any;
  // public player: any;
  // public reframed: Boolean = false;


  constructor(private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router) { }

    // init() {
    // var tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // }

  ngOnInit() { }
  //   this.init();
  //   this.video = '1cH2cerUpMQ' //video id

  //   window['onYouTubeIframeAPIReady'] = (e) => {
  //     this.YT = window['YT'];
  //     this.reframed = false;
  //     this.player = new window['YT'].Player('player', {
  //       videoId: this.video,
  //       events: {
  //         'onStateChange': this.onPlayerStateChange.bind(this),
  //         'onError': this.onPlayerError.bind(this),
  //         'onReady': (e) => {
  //           if (!this.reframed) {
  //             this.reframed = true;
  //             reframe(e.target.a);
  //           }
  //         }
  //       }
  //     });
  //   };
  // }
  // onPlayerStateChange(event) {
  //   console.log(event)
  //   switch (event.data) {
  //     case window['YT'].PlayerState.PLAYING:
  //       if (this.cleanTime() == 0) {
  //         console.log('started ' + this.cleanTime());
  //       } else {
  //         console.log('playing ' + this.cleanTime())
  //       };
  //       break;
  //     case window['YT'].PlayerState.PAUSED:
  //       if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
  //         console.log('paused' + ' @ ' + this.cleanTime());
  //       };
  //       break;
  //     case window['YT'].PlayerState.ENDED:
  //       console.log('ended ');
  //       break;
  //   };
  // };
  // //utility
  // cleanTime() {
  //   return Math.round(this.player.getCurrentTime())
  // };
  // onPlayerError(event) {
  //   switch (event.data) {
  //     case 2:
  //       console.log('' + this.video)
  //       break;
  //     case 100:
  //       break;
  //     case 101 || 150:
  //       break;
  //   };
  // };
}