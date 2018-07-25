import { Component } from '@angular/core';
import { Http, Response } from "@angular/http"
import { HttpClient } from "@angular/common/http"
import { Post } from './post'
import { Observable } from 'rxjs/Observable'
import { PassThrough } from 'stream';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient){}

}
