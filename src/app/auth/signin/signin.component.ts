import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  error: string = '';
  ngOnInit() {
  }

  onConnect(form: NgForm){
    let email = form.value.email;
    let password = form.value.password;
    this.authService.authentificate(email,password);

    if(this.authService.isAuthentificated===false){
      this.error = 'Email or password is incorrect';
    }

  }

  onClear(form: NgForm){
    this.error='';
    form.reset();

  }

}
