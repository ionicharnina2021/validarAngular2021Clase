import { Injectable } from '@angular/core';
import {
 FormControl, 
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HomeControlService {
  public ejemploForm: FormGroup;
  validationMessages = new Map<string, Map<string, string>>();
  miControlMap = new Map<string, string>();
  constructor() {
    this.miControlMap.set('minlength', 'No se si funcionara');
    this.validationMessages.set('nombreEntrada', this.miControlMap);
    this.ejemploForm = new FormGroup({
      nombreEntrada: new FormControl('', Validators.minLength(3)),
      telefonoMovil: new FormControl('', Validators.pattern('.')),
    });
  }
  getErrorMessage(control, error: ValidationErrors) {
    return this.validationMessages.get(control).get(Object.keys(error)[0]);
  }
}
