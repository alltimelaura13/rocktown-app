import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RegisterComponent } from '../../components/register/register.component';
import { ProfileConfigComponent } from '../../components/user/profile-config/profile-config.component';

import { reframe } from 'reframe.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AngularFireDatabase]
})
export class UserComponent implements OnInit {
  userId: string;
  items: FirebaseListObservable<Item[]> = null;
  
  constructor(private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private AngularFireAuth: AngularFireAuth,
    private router: Router) { 
      this.userId = firebase.auth().currentUser.uid;
      this.AngularFireAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })
    }

  ngOnInit() { }
  
  getItemsList(): FirebaseListObservable<Item[]> {
    if (!this.userId) return;
    this.items = this.db.list(`items/${this.userId}`);
    return this.items
  }

configuration() {
  this.router.navigate(['settings'])
}

}