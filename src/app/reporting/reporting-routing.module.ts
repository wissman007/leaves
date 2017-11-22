import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LeaveReportsComponent} from "./leave-reports/leave-reports.component";
import {ReportingComponent} from "./reporting.component";

const reportingRouting: Routes= [
  {path: '', component: ReportingComponent, children: [
    {path: 'leave-reports', component: LeaveReportsComponent}
  ]}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(reportingRouting)

  ]

})
export class ReportingRoutingModule {

}
