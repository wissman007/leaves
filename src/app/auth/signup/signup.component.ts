import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {NgFor} from "@angular/common";
import {UserService} from "../../administration/services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {
 //@ViewChild('f') formSignUp;

//  email: string;
//  password: string;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onRegister(form: NgForm){
    let email= form.value.email;
    let password = form.value.password;

    console.log('email: ' + email + ' password: ' + password);
    // console.log(this.formSignUp.value.email);
    this.userService.register(email, password);
  }

  onClear(form: NgForm) {
    form.reset();
  }
}
