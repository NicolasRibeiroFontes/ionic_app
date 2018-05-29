import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email:['', Validators.required],
      password: ['',Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
    })
  }

  login(){
    let {email, password} = this.loginForm.controls;

    if (!email.valid)
      alert('Email Inválido!');
    
    if (!password.valid)
      alert('Senha Inválida!');

    if (this.loginForm.valid)
      alert('ok!');
  }

}
