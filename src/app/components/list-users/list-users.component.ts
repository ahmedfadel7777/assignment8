import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  usersList:any[]=[]

  constructor(private _UsersService:UsersService){}

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this._UsersService.getAllUsers().subscribe({
      next:(res)=>{
        console.log(res.users);
        this.usersList=res.users
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  deleteUser(userId:any){
    this._UsersService.deleteUser(userId).subscribe({
      next:(res)=>{
        console.log(res);
        this.getAllUser()
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  // updateUser(id:any){
  //   this._UsersService.updateUser(id).subscribe({
  //     next:(res)=>{
  //       console.log(res);
        
  //     },
  //     error:(err)=>{
  //       console.log(err);
        
  //     }
  //   })
  // }
}
