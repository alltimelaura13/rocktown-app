import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

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


  constructor(private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { }
  

configuration() {
  this.router.navigate(['settings'])
}

}