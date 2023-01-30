import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { CanDeactivateGaurd } from './signup/can-deactivate-guard.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent, canDeactivate: [CanDeactivateGaurd] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assets', component: DashboardComponent },
  { path: 'booking', component: DashboardComponent },
  { path: 'messages', component: DashboardComponent },
  { path: 'settings/:id', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
