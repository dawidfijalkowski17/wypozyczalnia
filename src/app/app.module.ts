import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainViewModule } from './modules/core/main-view/main-view.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainViewModule,
    RouterModule.forRoot([]),
    TranslateModule.forRoot({
      defaultLanguage:'pl',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    HttpClientModule
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private translate: TranslateService,

  ) {
    this.translate.setDefaultLang('pl');
    translate.use('pl');
  }
}
