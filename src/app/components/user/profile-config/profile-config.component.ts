import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-config',
  templateUrl: 'profile-config.component.html',
  styleUrls: []
})
export class ProfileConfigComponent implements OnInit {
  logo: string = "assets/app-white.jpg";


  constructor(
    private routes: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }


  update(myUsername, myEmail, 
    myFirstName, myLastName, myCity, myCountry) {
    firebase.database().ref('users/').push({
      Username: myUsername,
      Email: myEmail,
      FirstName: myFirstName,
      LastName: myLastName,
      City: myCity,
      Country: myCountry,
      
    });
    this.router.navigate(['home']);
    error => {
      // this.alertService.error(error);
      
    };
  }

}
