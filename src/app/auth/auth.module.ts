import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthComponent} from "./auth.component";
import {FormsModule} from "@angular/forms";
import {SignOutComponent} from "./signout.component";
import { FaceBookLoginComponent } from './face-book-login/face-book-login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [SigninComponent, SignupComponent, AuthComponent, SignOutComponent, FaceBookLoginComponent]
})
export class AuthModule { }
