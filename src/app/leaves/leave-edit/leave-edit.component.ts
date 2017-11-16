import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-leave-edit',
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.css']
})
export class LeaveEditComponent implements OnInit {

  typesLeave = ['CP','CM'];


  leaveForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initLeaveForm();
  }

  initLeaveForm(){
    this.leaveForm = new FormGroup({
      'startDate' : new FormControl(null),
      'endDate' : new FormControl(null),
      'description': new FormControl(null),
      'typeLeave': new FormControl(null)

    });
  }

  onSaveLeave(){
    console.log(this.leaveForm);
  }
}
