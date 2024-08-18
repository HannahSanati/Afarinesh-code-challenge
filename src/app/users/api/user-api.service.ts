import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERS_ENDPOINT } from './user-api.endpoint';
import { User } from './user-api.model';

@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<User[]>(USERS_ENDPOINT.base)
  }  

  getDataById(id: number){
    return this.http.get<User>(USERS_ENDPOINT.byId(id))
  }
}
