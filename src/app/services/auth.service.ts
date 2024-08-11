import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if (localStorage.getItem('token') !== null) {
      return ;
    }else{
      this._Router.navigate(["/login"])
    }
  }

  login(userData:any): Observable<any>{
    return this._HttpClient.post('https://dummyjson.com/auth/login',userData)
  }
}
