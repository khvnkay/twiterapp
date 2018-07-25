import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http"
import { HttpClient } from "@angular/common/http"
import { Post } from './post'
import { Observable } from 'rxjs/Observable'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  readonly ROOT_URL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token={token}'
  posts: Observable<Post[]>
  constructor(private http: HttpClient){}

  ngOnInit() {
  }
  datas: any[];
  getPosts(){
    this.posts = this.http.get(this.ROOT_URL)
    .subscribe(
      (res: Response) =>{
        this.datas = res.data
        console.log(this.datas);
        
      }
    )
  }
  readonly ENDPOINT_FRIEND ='https://api.instagram.com/v1/tags/DontTellMeHowToDress/media/recent?access_token={token}'
  getFriend(){
    this.posts = this.http.get(this.ENDPOINT_FRIEND)
    .subscribe(
      (res: Response) =>{
        this.datas = res.data
        console.log(this.datas);
        
      }
    )

  }

}
