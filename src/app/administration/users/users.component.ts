import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor( private userService: UserService) { }
  usersSubscription: Subscription;
  users: UserModel[]= this.userService.getUsers();
  ngOnInit() {
    this.usersSubscription = this.userService.usersChanged
      .subscribe(
        (users: UserModel[]) => {
          this.users = users;
        }
      );

  }

  ngOnDestroy(){
    this.usersSubscription.unsubscribe();
  }

}
