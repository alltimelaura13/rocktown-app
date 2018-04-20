import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { RegisterComponent } from '../components/register/register.component';
import { ProfileConfigComponent } from '../components/user/profile-config/profile-config.component';

@Injectable()
export class AuthService {


  public messages: Observable<any>;
  public users: Observable<any>;
  public displayName: string;
  public email: string;
  public password: string;
  public user: Observable<any>;
  userId: string;
  authState: any = null;
  // items: FirebaseListObservable<Item[]> = null;
  

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase, 
    private router: Router) {

      this.firebaseAuth.authState.subscribe((auth) => {
        this.authState = auth
      });

      // this.userId = firebase.auth().currentUser.uid;
      // this.firebaseAuth.authState.subscribe(user => {
      //   if(user) this.userId = user.uid
      // })
    }      
    

    // get currentUserId(): string {
    //   return (this.authState !== null) ? this.authState.uid : ''
    // }
   
    get currentUserName(): string {
      return this.authState['email']
    }

   signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  update(username, email, 
    firstName, lastName, city, country, music, about) {
    firebase.database().ref('users/').push({
      Username: username,
      Email: email,
      FirstName: firstName,
      LastName: lastName,
      City: city,
      Country: country,
      Music: music,
      About: about,
      
    })
  .then((res) => this.router.navigate(['home']));
    error => {
      // this.alertService.error(error);
      
    };
  }


   // getItemsList(): FirebaseListObservable<Item[]> {
  //   if (!this.userId) return;
  //   this.items = this.db.list(`items/${this.userId}`);
  //   return this.items
  // }

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



