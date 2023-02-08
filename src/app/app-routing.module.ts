import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    component: LandComponent,
    path: 'land'
  },
    {
    component: ShortAnswerComponent,
    path: 'short-answer'
  },
  {
    component: HeadComponent,
    path: 'head'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: SignupComponent,
    path: 'signup'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
