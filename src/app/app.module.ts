import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AdministrationModule} from './administration/administration.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ReportingModule} from './reporting/reporting.module';
import {MenuModule} from './menu/menu.module';
import {FooterModule} from "./footer/footer.module";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HeaderModule,
    HttpModule,
    HttpClientModule,
    AdministrationModule,
    ReportingModule,
    MenuModule,
    FooterModule,

    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [AuthService, AuthGuard  ],
  bootstrap: [AppComponent]
})



export class AppModule {


}
