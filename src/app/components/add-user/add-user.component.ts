import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  userData:FormGroup=new FormGroup({
    firstName:new FormControl(null),
    lastName:new FormControl(null),
    age:new FormControl(null),
    birthDate:new FormControl(null),
    email:new FormControl(null),
    phone:new FormControl(null),
  })

  constructor(private _UsersService:UsersService){}

  addUser(userData:any){
    this._UsersService.addUser(userData.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
