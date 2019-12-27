import { SignUpComponent } from './signUp/signup.component';
import { WelComeComponent } from './wel-come/wel-come.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router'
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'student',
        component: WelComeComponent
    },
    {
        path: 'basic-form',
        component: SignUpComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
