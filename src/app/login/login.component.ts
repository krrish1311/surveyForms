import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    public httpclient:HttpClient
  ){
    
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = {
    isErrorState: (control: FormControl) => {
      return control.invalid && control.touched;
    },
  };

  loginForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  login() {
    console.log(this.loginForm.value)

    let headers1=new HttpHeaders({
      'content-Type': 'application/json'
    })
    let obj={
      username:'admin100',
     // email_id:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.httpclient.post("http://localhost:7600/login",obj,{headers:headers1}).subscribe(response=>{
      console.log(response)
      localStorage.setItem('currentUser', JSON.stringify(response ));
    })
  }
}
