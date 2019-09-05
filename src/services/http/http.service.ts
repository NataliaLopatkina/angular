import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('../../assets/data-base/users.json')
  }

  getPosts() {
    return this.http.get('../../assets/data-base/posts.json')
  }
}
