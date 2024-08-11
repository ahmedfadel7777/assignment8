import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

  getAllUsers():Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/users`)
  }

  addUser(userData:any):Observable<any>{
    return this._HttpClient.post('https://dummyjson.com/users/add',
      userData
    )
  }

  updateUser(userData:any,id:any):Observable<any>{
    return this._HttpClient.put(`https://dummyjson.com/users/${id}`,
      userData
    )
  }

  deleteUser(id:any):Observable<any>{
    return this._HttpClient.delete(`https://dummyjson.com/users/${id}`)
  }

  profileUser(id:any):Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/users/${id}`)
  }
}
