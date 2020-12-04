import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post.model';
import { flatMap, map } from 'node_modules/rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  private readonly BASE_URL = "https://jsonplaceholder.typicode.com"; 

  constructor(private httpClient : HttpClient) { }

  getPosts() : Observable<Post>{
      return this.httpClient.get(this.BASE_URL + '/posts')
      .pipe( 
        map( obj => (obj as Post[]) ),
        flatMap( post => post)
      );
  }

}
