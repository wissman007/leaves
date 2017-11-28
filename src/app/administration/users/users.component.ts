import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";
import {UserModel} from "../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute)
{ }
  usersSubscription: Subscription;
  usersSubscriptionInit: Subscription;
  users: UserModel[];



  ngOnInit() {

    this.usersSubscriptionInit =  this.userService.getUsers()
      .subscribe(
        (users : UserModel[]) => {
          console.log(users);
          this.users = users;
        }
      );

    this.usersSubscription = this.userService.usersChanged
      .subscribe(
        (users: UserModel[]) => {
          this.users = users;
        }
      );

  }

  newUser(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }

  ngOnDestroy(){
    this.usersSubscription.unsubscribe();
    this.usersSubscriptionInit.unsubscribe();
  }

}
