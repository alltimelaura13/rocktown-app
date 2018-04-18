import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing/app-routing.module'


import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { ProfileConfigComponent } from './components/user/profile-config/profile-config.component';

import { reframe } from 'reframe.js';
import { VideosComponent } from './components/videos/videos.component';




export const firebaseConfig = {
  apiKey: "AIzaSyCpnlV2Y6cJqG-R9JsQDM1WI9BtpCuEHdE",
  authDomain: "rocktown-users.firebaseapp.com",
  databaseURL: "https://rocktown-users.firebaseio.com",
  projectId: "rocktown-users",
  storageBucket: "rocktown-users.appspot.com",
  messagingSenderId: "745002530522"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserComponent,
    ProfileConfigComponent,
    VideosComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    reframe
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
