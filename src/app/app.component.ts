import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName = '';
  passWord = '';

  loginData(user, pass): void{
    let value = 5;
    console.log(this.userName); 
    console.log(this.passWord);
    console.log(user);
    console.log(pass);
  }

  
}

