import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './head/head.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ShortAnsComponent } from './short-ans/short-ans.component';
import { EmailComponent } from './email/email.component';
import { NumberComponent } from './number/number.component';
import { DateComponent } from './date/date.component';
import { SingleCorrectComponent } from './single-correct/single-correct.component';
import { MultipleCorrectComponent } from './multiple-correct/multiple-correct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ShortAnswerComponent,
    LandComponent,
    LoginComponent,
    SignupComponent,
    CreateFormComponent,
    ShortAnsComponent,
    EmailComponent,
    NumberComponent,
    DateComponent,
    SingleCorrectComponent,
    MultipleCorrectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
