import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  logo: string = "assets/app-white.jpg";
  welcome: string = "assets/wel-drum-1.png";
  loading = false;

  constructor(
    private routes: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() { }

  submitForm(myForm) {
    console.log(myForm);
  }
  
  add(myUsername, myPassword) {
    this.loading = true;
    firebase.database().ref('users/').push({
      Username: myUsername,
      Password: myPassword
    });
    this.router.navigate(['home']);
    error => {
      // this.alertService.error(error);
      this.loading = false;
    };
  }

}
