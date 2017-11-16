import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves.component';
import { LeaveslistComponent } from './leaveslist/leaveslist.component';
import { LeaveItemComponent } from './leaveslist/leave-item/leave-item.component';
import { LeaveEditComponent } from './leave-edit/leave-edit.component';
import { LeaveViewComponent } from './leave-view/leave-view.component';
import {LeavesRoutingModule} from "./leaves-routing.module";

@NgModule({
  imports: [
    CommonModule,
    LeavesRoutingModule
  ],

  declarations: [LeavesComponent, LeaveslistComponent, LeaveItemComponent, LeaveEditComponent, LeaveViewComponent]
})
export class LeavesModule { }
