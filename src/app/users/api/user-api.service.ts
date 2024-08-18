import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERS_ENDPOINT } from './user-api.endpoint';

@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(USERS_ENDPOINT.base)
  }
}
