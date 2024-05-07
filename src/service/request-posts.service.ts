import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestPostsService {

  path = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  public fetchPosts(): Observable<any>{
    return this.httpClient.get(this.path, {})
    .pipe(map((res: any) => {
      return res;
    }))
  }
  
}
