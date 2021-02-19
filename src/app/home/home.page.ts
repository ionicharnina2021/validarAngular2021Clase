import { HomeControlService } from './home-control.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Crear un grupo de controles de formulario Angular
  ejemploForm: FormGroup;
  validationMessages;
  nombre: string;
  constructor(private homeControlService: HomeControlService) {
    this.ejemploForm = this.homeControlService.ejemploForm;
    this.validationMessages = this.homeControlService.validationMessages;
  }
  getErrorMessage(control, error) {
    return this.homeControlService.getErrorMessage(control, error);
  }

  get(nombre){
    let servicio=this.ejemploForm.get(nombre);
    return servicio;
  }
}
