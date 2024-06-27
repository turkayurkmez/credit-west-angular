import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  isLoggedIn: boolean = false;
  returnUrl: string | undefined;
  validateUser(userName: string, password: string) {
    if (userName === 'test' && password === '123456') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
