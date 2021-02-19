import { AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { Mensaje } from './mensaje';
export class MyFormControl extends FormControl{


    validationMessages = new Map<string, string>();
    constructor(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null){
        super(formState,validatorOrOpts,asyncValidator);
    }

    insertValidationMessages(mensaje: Mensaje) {
     for (let index = 0; index < mensaje.nombre.length; index++) {
      this.insertValidationMessage(mensaje.nombre[index],mensaje.mensaje[index]);
     }
    }
    public insertValidationMessage(error: string, message: string) {
        this.validationMessages.set(error, message);
      }
    
      public getValidationMessage(error: string): string {
        return this.validationMessages.get(error);
      }
}