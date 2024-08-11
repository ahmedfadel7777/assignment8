import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}

  loginForm:FormGroup=new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
  })

  handleLogin(loginForm:FormGroup){
    if (loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          localStorage.setItem('token',res.token)
          this._Router.navigate(['/dashboard'])
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
  }
}
