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
      nombreEntrada:new FormControl('',Validators.minLength(3))
    });
  }

}
