import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LeavesComponent} from "./leaves.component";
import {LeaveslistComponent} from "./leaveslist/leaveslist.component";
import {LeaveEditComponent} from "./leave-edit/leave-edit.component";
import {LeaveViewComponent} from "./leave-view/leave-view.component";

const leavesRoutes: Routes = [

    {path: '', component: LeavesComponent, children: [
        {path: 'list', component: LeaveslistComponent},
        {path: ':id', component: LeaveViewComponent},
        {path: ':id/edit', component: LeaveEditComponent}
    ]}

];

@NgModule({
    imports:[
         RouterModule.forChild(leavesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LeavesRoutingModule {

}