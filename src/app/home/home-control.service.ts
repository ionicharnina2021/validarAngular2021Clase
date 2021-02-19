import { Mensaje } from './../control/mensaje';
import { Injectable } from '@angular/core';
import {
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MyFormControl } from '../control/myFormControl';
import { MyFormGroup } from '../control/myFormGroup';

@Injectable({
  providedIn: 'root',
})
export class HomeControlService {
  private _myFormGroup: MyFormGroup;
  private nombreCampos=["nombre","apellidos","otro","otro"];
  public nombreControles = ['miControl', 'compuesto', 'regular', 'regularDos'];
  private regex = '';
  private controles = [
    new MyFormControl('', [Validators.minLength(3)]),
    new MyFormControl('',Validators.compose([Validators.required, Validators.maxLength(3)])),
    new MyFormControl('', Validators.pattern(this.regex)),
    new MyFormControl('', Validators.pattern('hola[ao]')),
  ];
  private mensajes=[
    new Mensaje(['minlength','require'],['No se si funcionara','que hace falta']),
    new Mensaje(['min','require'],['valor escaso','que hace falta']),
    new Mensaje(['minlength','require'],['No se si funcionara','que hace falta']),
    new Mensaje(['minlength','require'],['No se si funcionara','que hace falta']),
 ]
  constructor() {   
    this._myFormGroup = new MyFormGroup(this.nombreCampos,this.nombreControles,this.controles,this.mensajes);
  }
  getErrorMessage(control, error: ValidationErrors) {   
    let envoltorio=<MyFormControl> this._myFormGroup.formGroup.get(control);
    return  envoltorio.getValidationMessage(Object.keys(error)[0]);
  }

  public getFormGroup():FormGroup{
    return this._myFormGroup.formGroup;
  }
 
  public getNombreControles():string[]{
    return this._myFormGroup.nameControl;
  }
}
