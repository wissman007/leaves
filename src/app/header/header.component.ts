import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private translateService: TranslateService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
  }


  onSelectFrench(){
    this.translateService.use('fr');
  }

  onSelectEnglish(){
    this.translateService.use('en');
  }


  logout(){
    this.authService.logout();
    this.router.navigate(['/'], {relativeTo: this.route})
  }
}

