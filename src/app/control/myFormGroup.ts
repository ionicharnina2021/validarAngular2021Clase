import { Mensaje } from './mensaje';
import { FormGroup } from '@angular/forms';
import { MyFormControl } from './myFormControl';

export class MyFormGroup {
  insertarValidationMessages(arg0: string, arg1: string[], arg2: string[]) {
    throw new Error('Method not implemented.');
  }
  private _formGroup: FormGroup;
  constructor(
    private nameFields: string[],
    public nameControl: string[],
    private formControls: MyFormControl[],
    private mensajes:Mensaje[],
  ) {
    this._formGroup = new FormGroup({});
    for (let index = 0; index < nameFields.length; index++) {
      this.formGroup.addControl(this.nameControl[index], this.formControls[index]);
      this.formControls[index].insertValidationMessages(mensajes[index]);
    }
  }

  public getControl(key: string): MyFormControl {
    let retorno=this.formGroup.get(key);
    return <MyFormControl> retorno;
  }
  
  public get formGroup(): FormGroup {
    return this._formGroup;
  }
}
