import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router} from "@angular/router";
import {LeaveService} from "../services/leaves.service";
import {LeaveModel} from "../model/leave.model";

@Component({
  selector: 'app-leave-view',
  templateUrl: './leave-view.component.html',
  styleUrls: ['./leave-view.component.css']
})
export class LeaveViewComponent implements OnInit {

  constructor(private leaveService: LeaveService,  private route: ActivatedRoute, private router: Router) { }

  leaveSelected: LeaveModel;
  index: number;
  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
                this.index = +params['id'];
                this.leaveSelected = this.leaveService.getLeave(this.index);
           }
        )

  }

  onEditLeave(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteLeave(){
    this.leaveService.deleteLeave(this.index)


  }

}
