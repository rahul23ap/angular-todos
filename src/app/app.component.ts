import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/">Home</a></li>
       <li><a routerLink="/about">About</a></li>
       <li><a routerLink="/registration">Registration</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
    `,
})
export class AppComponent  { 
  
}