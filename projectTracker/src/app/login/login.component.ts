import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router){}
  login(userName: string, password:string){
    this.userService.validateUser(userName,password);
    if (this.userService.returnUrl != undefined) {
      console.log(this.userService.returnUrl);
      this.router.navigate([this.userService.returnUrl]);
    }

  }

}
