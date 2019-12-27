import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignUpComponent {

    constructor(private router: Router){
    }

    name = '';
    password = '';
    gender = '';
    country = '';
    conformation = '';

    signup(): void {
        console.log(this.name);
        console.log(this.password);
        console.log(this.gender);
        console.log(this.country);
        console.log(this.conformation);
    }

    GotoHome(): void{
        this.router.navigateByUrl('/home');
    }
}