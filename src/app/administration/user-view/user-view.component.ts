import {Component, OnInit, Injectable} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {UserModel} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})


@Injectable()
export class UserViewComponent implements OnInit {

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService
        ) { }
  index: number;
  user: UserModel;
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.user = this.userService.getUser(this.index);
        }

      );

  }

}
