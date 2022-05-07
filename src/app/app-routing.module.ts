import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { EmployerRegistrationComponent } from './components/employer-registration/employer-registration.component';
import { ChatComponent } from './components/chat/chat.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'detail/:id', component: JobDetailsComponent},
  { path: 'mapicka', component: MapComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'register-user',
    component: UserRegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register-employer',
    component: EmployerRegistrationComponent,
    canActivate: [AuthGuard],
  },
  { path: 'chat', component: ChatComponent },
  { path: 'job-list', component: JobListComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
