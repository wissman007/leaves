import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {LeaveModel} from "../model/leave.model";
import {LeaveService} from "../services/leaves.service";

@Component({
  selector: 'app-leave-edit',
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.css']
})
export class LeaveEditComponent implements OnInit {

  typesLeave = ['CP','CM'];

  leaveForm: FormGroup;
  leave: LeaveModel;
  editMode=false;

  constructor(
      private leaveService: LeaveService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.leave = this.leaveService.getLeave(+params['id']);
              this.editMode = params['id'] != null;
              this.initLeaveForm();
            }
        )

  }

  initLeaveForm(){

    let startDate = '';
    let endDate = '';
    let description = '';
    let typeLeave = '';

      if(this.editMode){
        startDate = this.leave.startDate;
        endDate = this.leave.endDate;
        description = this.leave.description;
        typeLeave = this.leave.typeLeave;
      }


    this.leaveForm = new FormGroup({
      'startDate' : new FormControl(startDate, Validators.required),
      'endDate' : new FormControl(endDate, Validators.required),
      'description': new FormControl(description, Validators.required)
 //     'typeLeave': new FormControl(typeLeave, Validators.required)

    });
  }

  onSaveLeave(){
    console.log(this.leaveForm);
    this.leaveService.saveLeave(this.leaveForm.value);
    this.onCancel();


  }

  onCancel(){
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onClear(){

    this.leaveForm.reset();

  }
}
