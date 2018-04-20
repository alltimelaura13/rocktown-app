import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-config',
  templateUrl: 'profile-config.component.html',
  styleUrls: []
})
export class ProfileConfigComponent implements OnInit {
  logo: string = "assets/app-white.jpg";
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  music: string;
  about: string;
  user = this.firebaseAuth;
  users: Object[];



  constructor(
    private af: AngularFireDatabase,
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

  ngOnInit() {
  }



  

  update(username, email, 
    firstName, lastName, city, country, music, about) {
    firebase.database().ref('users/' + '-LAI2y2-3-zwClCI8s3n').update({
      Username: username,
      Email: email,
      FirstName: firstName,
      LastName: lastName,
      City: city,
      Country: country,
      Music: music,
      About: about,
      
    })
  .then((res) => this.router.navigate(['/home']));
    error => {
      // this.alertService.error(error);
      
    };
  }

}
