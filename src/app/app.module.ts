import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTPService } from '../services/http.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexSubPage1Component } from './index/subPages/subPage1/subPage1.component';
import { IndexSubPage2Component } from './index/subPages/subPage2/subpage2.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AuthGuard } from '../services/auth';
import { CanActivate, CanActivateChild ,ActivatedRouteSnapshot,RouterStateSnapshot,Route} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    IndexSubPage1Component,
    IndexSubPage2Component,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDZxEGtEABtf4LUBC0vIzvFLL7AAePx4KE',
      libraries: ["places"]
  })
  ],
  providers: [
    HTTPService,AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
