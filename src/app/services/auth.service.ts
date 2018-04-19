import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { RegisterComponent } from '../components/register/register.component';

@Injectable()
export class AuthService {


  public messages: Observable<any>;
  public users: Observable<any>;
  public displayName: string;
  public email: string;
  public password: string;
  public user: Observable<any>;


  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase, 
    private router: Router) {

    
  }

   signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  // signup() {
  //   this.authService.signup();
  //   this.email = this.password = '';
  // }

}


  // isLoggedIn() {
  //   if (this.userDetails == null ) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // logout() {
  //     this._firebaseAuth.auth.signOut()
  //     .then((res) => this.router.navigate(['/']));
  //   }
  // }



