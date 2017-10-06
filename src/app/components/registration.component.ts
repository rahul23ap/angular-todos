import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


//import { FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';
//import { RouterLink, RouteParams, RouteData, Location } from 'angular2/router';
//import { emailValidator, matchingPasswords } from './validators';
//import { SimpleResource } from './simpleResource';

@Component({
  moduleId: module.id,
  selector: 'registration',
  templateUrl: 'registration.component.html',
})
export class RegistrationComponent  {
    header_title: string;

    constructor(){
      this.header_title = "This is an Registration page!"
    }

    
    formSubmit(form){
    	console.log(form);

    }    
 }