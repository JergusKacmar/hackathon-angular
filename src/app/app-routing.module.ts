
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login.page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }