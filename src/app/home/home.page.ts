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
  nombreControles:Array<string>;
  nombre: string;

  constructor(private homeControlService: HomeControlService) {
    this.ejemploForm=this.homeControlService.getFormGroup();
    this.nombreControles=this.homeControlService.getNombreControles();
  }
  getErrorMessage(control, error) {
    return this.homeControlService.getErrorMessage(control, error);
  }

 
}
