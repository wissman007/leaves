import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-user-item',
  templateUrl: 'user-item.component.html',
  styleUrls: ['user-item.component.css']
})
export class UserItemComponent implements OnInit, OnDestroy {
  @Input() user: UserModel;
  @Input() index: number=null;
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.index=null;
  }

}
