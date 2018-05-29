import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FormBuilder } from '@angular/forms/src/form_builder';

@NgModule({
  declarations: [
    LoginPage,,
    FormBuilder
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
