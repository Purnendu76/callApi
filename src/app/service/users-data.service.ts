import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
user='https://dragonball-api.com/api/characters'
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.user);
  }
}
