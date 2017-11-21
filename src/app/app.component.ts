import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['fr', 'en']);
    this.translateService.setDefaultLang('en');

    let browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }


}
