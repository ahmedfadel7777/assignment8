import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoBackService {

  constructor(private _Location:Location) { }

  goBack(){
    this._Location.back()
  }
}
