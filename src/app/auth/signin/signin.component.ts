import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

export interface Credentials {
  username: string,
  password: string
}

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {

  credentials: Credentials;
  constructor(private authService: AuthService, private router: Router, private route:ActivatedRoute) { }
  error: string ;
  isAuthentified=false;
  ngOnInit() {
  }

  onConnect(form: NgForm){
    let email = form.value.email;
    let password = form.value.password;

    this.credentials = {
                         'username': email,
                         'password': password
                       };
   this.authService.login(this.credentials)
      .subscribe(
        result => {

          this.isAuthentified = result;

          if(this.isAuthentified===false){
            this.error = 'Email or password is incorrect';
          }
          else {
            this.router.navigate(['/']);
          }


        },

        error => console.log(error)

      );





  }

  onClear(form: NgForm){
    this.error='';
    form.reset();

  }

}
