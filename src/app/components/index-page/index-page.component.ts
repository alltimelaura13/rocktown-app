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


@Component({
  selector: 'app-index-page',
  templateUrl: 'index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {

  title = 'app works!';
  searchForm: any;
  results$: Observable<any>;
  searchText: any;

  constructor(private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private firebaseAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router,
    private _formBuilder: FormBuilder, private _http: Http) {

    const API_URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = 'AIzaSyDzqZUvI_FcLKg00BaczXSxUZARdYT7_00';
    this.searchForm = this._formBuilder.group({
      'searchInput': ['', Validators.required]
    });
    this.results$ = this.searchForm.controls.searchInput.valueChanges
      .switchMap(query => this._http.get(`${API_URL}?q=${query}&key=${API_KEY}&part=snippet`))
      .map(res => res.json())
      .map(res => res.items)
  }


}
