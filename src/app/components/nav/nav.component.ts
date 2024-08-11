import { Component } from '@angular/core';
import { GoBackService } from 'src/app/services/go-back.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private _GoBackService:GoBackService){}

  goBack(){
    this._GoBackService.goBack()
  }
}
