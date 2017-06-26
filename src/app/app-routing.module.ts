import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexSubPage1Component } from './index/subPages/subPage1/subPage1.component';
import { IndexSubPage2Component } from './index/subPages/subPage2/subpage2.component';



import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'index',
    component: IndexComponent,
    children: [
      { path: 's1', component: IndexSubPage1Component, data: { roles: ['admin', 'superadmin'] } },
      { path: 's2', component: IndexSubPage2Component, data: { roles: ['admin', 'superadmin', 'samrita'] } }
    ]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
