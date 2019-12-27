import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './signUp/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelComeComponent } from './wel-come/wel-come.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      WelComeComponent,
      SignUpComponent,
      ReactiveFormComponent,
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
