import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-reporting',
  templateUrl: 'reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  multi: any[];
  single: any[];

  view: any[] = [700, 400];

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit() {
  }



  constructor() {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }



}
