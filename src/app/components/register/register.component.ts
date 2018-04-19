import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';


@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styles: []
})


export class RegisterComponent implements OnInit {
  logo: string = "assets/app-white.jpg";
  welcome: string = "assets/wel-drum-1.png";
  loading = false;
  name: string;
  email: string;
  password: string;
  user = this.firebaseAuth;


  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router) { 

    }


    ngOnInit() { }

    // signup() {
    //   this.authService.signup();
    //   this.email = this.password = '';
    // }
    
    
    signInWithGoogle() {
      return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
        .then((res) => this.router.navigate(['home']));
    }
    


}




