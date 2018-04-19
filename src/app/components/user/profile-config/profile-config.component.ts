import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-profile-config',
  templateUrl: 'profile-config.component.html',
  styleUrls: []
})
export class ProfileConfigComponent implements OnInit {
  logo: string = "assets/app-white.jpg";
  username: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  city: string = '';
  country: string = '';
  music: string = '';
  about: string = '';



  constructor(
    private routes: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  

  update(username, email, 
    firstName, lastName, city, country, music, about) {
    firebase.database().ref('users/').update({
      Username: username.value,
      Email: email.value,
      FirstName: firstName.value,
      LastName: lastName.value,
      City: city.value,
      Country: country.value,
      Music: music.value,
      About: about.value,
      
    })
  .then((res) => this.router.navigate(['home']));
    error => {
      // this.alertService.error(error);
      
    };
  }

}
