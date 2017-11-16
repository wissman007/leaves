import {Component, OnInit, Input} from '@angular/core';
import {LeaveModel} from "../../model/leave.model";

@Component({
  selector: 'app-leave-item',
  templateUrl: './leave-item.component.html',
  styleUrls: ['./leave-item.component.css']
})
export class LeaveItemComponent implements OnInit {

  constructor() {}
  @Input() index;
  @Input() leave: LeaveModel;


  ngOnInit() {

  }

}
