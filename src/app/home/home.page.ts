import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Crear un grupo de controles de formulario Angular
  ejemploForm:FormGroup;
  nombre:string;
  constructor() {
    this.ejemploForm=new FormGroup({
      nombreEntrada:new FormControl('',Validators.minLength(3)),
      telefonoMovil:new FormControl('',Validators.pattern("\."))

    });
  }
  validationMessages = {
    'nameInput': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 5 characters long.',
      'maxlength': 'Username cannot be more than 25 characters long.',
      'pattern': 'Your username must contain only numbers and letters.',
      'validUsername': 'Your username has already been taken.'
    },
    //mensajes para el año
    'yearInput':{
      'isOld':"Deben ser posteriores a 1900",
      'pattern': 'el año no cumple el patron'
    }
  }
}
