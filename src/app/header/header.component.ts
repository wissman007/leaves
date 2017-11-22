import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private translateService: TranslateService) {}

  ngOnInit() {
  }


  onSelectFrench(){
    this.translateService.use('fr');
  }

  onSelectEnglish(){
    this.translateService.use('en');
  }

}

