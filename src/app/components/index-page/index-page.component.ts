import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/Rx';
import { Http } from '@angular/http';
// import { SearchResult } from './search-result/search-result.component';
// import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
// import { SearchBoxComponent } from './search-box/search-box.component';
// import { Input } from '@angular/core';
// import { YouTubeService } from "../../services/youtube.service";
// import { youTubeServiceInjectables } from '../../services/youtube.service';


@Component({
  selector: 'app-index-page',
  templateUrl: 'index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  // results: SearchResult[];
  // loading: boolean;

  constructor(private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private firebaseAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router) {}

  ngOnInit() {}


  profile() {
    this.router.navigate(['/home'])
  }

  // updateResults(results: SearchResult[]): void {
  //   this.results = results;
  // }
}