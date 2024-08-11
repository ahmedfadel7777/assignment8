import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  id:any=''
  userInfo:any={}

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
        this.id=param.get('id')
      }
    })

      this._UsersService.profileUser(this.id).subscribe({
        next:(res)=>{
          console.log(res);
          this.userInfo=res
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }


}
