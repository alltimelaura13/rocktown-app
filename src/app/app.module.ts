import { BrowserModule } from '@angular/platform-browser';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { routes } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { VideosComponent } from './components/videos/videos.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { ProfileConfigComponent } from './components/user/profile-config/profile-config.component';
import { AuthService } from './services/auth.service';

import { YoutubeApiService } from "./services/youtube-api.service";

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';



// import { reframe } from 'reframe.js';





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
    YoutubePlayerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
   
    // reframe
  ],
  providers: [AuthService, YoutubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
