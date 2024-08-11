import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  userId:any=''

  userData:FormGroup=new FormGroup({
    firstName:new FormControl(null),
    lastName:new FormControl(null),
    age:new FormControl(null),
    birthDate:new FormControl(null),
    email:new FormControl(null),
    phone:new FormControl(null),
  })

  constructor(private _UsersService:UsersService,private _ActivatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        console.log(param.get('id'));
        this.userId=param.get('id')
      }
    })
  }


  updateUser(userData:any,userId:any){
    this._UsersService.updateUser(userData.value,userId).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
