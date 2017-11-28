import {Component, OnInit, OnDestroy} from '@angular/core';
import {LeaveService} from "../services/leaves.service";
import {Subscription} from "rxjs";
import {LeaveModel} from "../model/leave.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-leaveslist',
  templateUrl: './leaveslist.component.html',
  styleUrls: ['./leaveslist.component.css']
})
export class LeaveslistComponent implements OnInit, OnDestroy {
  constructor(
      private leaveService: LeaveService,
      private route: ActivatedRoute,
      private router: Router ) {}

  leaves: LeaveModel[] = [];

  leavesSubscription: Subscription;
  leavesHttpSubscription: Subscription;
  ngOnInit() {

    this.leavesHttpSubscription = this.leaveService.getLeaves()
      .subscribe(
        (leaves: LeaveModel[]) => {
          this.leaves = leaves;
        }
      )

    this.leavesSubscription = this.leaveService.leavesChanged
        .subscribe(
            (leaves: LeaveModel[]) => {
              this.leaves = leaves;
            }
        )

  }

  newLeave(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  ngOnDestroy(){
    this.leavesSubscription.unsubscribe();
  }



}
