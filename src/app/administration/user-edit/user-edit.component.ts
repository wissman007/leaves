import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {UserService} from "../services/user.service";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
        'firstName': new FormControl(''),
        'lastName': new FormControl(''),
        'birthDate': new FormControl(''),
        'email': new FormControl('')
      }
    )

  }

  onSave(){
    let user= new UserModel(
      this.userForm.value.email,
      this.userForm.value.firstName,
      this.userForm.value.lastName,
      this.userForm.value.birthDate,0,'',''
    );
    console.log(this.userForm);
    this.userService.addUser(user);

  }

}
