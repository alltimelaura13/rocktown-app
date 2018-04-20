import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { RegisterComponent } from '../../components/register/register.component';
import { ProfileConfigComponent } from '../../components/user/profile-config/profile-config.component';
import { IndexPageComponent } from '../../components/index-page/index-page.component';

import { reframe } from 'reframe.js';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AngularFireDatabase]
})
export class UserComponent implements OnInit {
  userId: string;
  users: Object[];
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  music: string;
  about: string;
  user = this.firebaseAuth;
  
  player: YT.Player;
  videoId: string;

	savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
	}
  onStateChange(event){
    console.log('player state', event.data);
  }

  constructor(private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private firebaseAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router) { 

      af.list('users').valueChanges().subscribe(
        users => {
          this.users = users;
        }
      )

    }

  ngOnInit() { }
  
  userl() {
console.log(this.user.auth.currentUser)
  }

configuration() {
  this.router.navigate(['/settings'])
}

index() {
  this.router.navigate(['/index'])
}

}