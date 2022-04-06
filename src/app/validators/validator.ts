import {AbstractControl} from '@angular/forms';
//Form control passato come input
//il tipo del primo parametro (control) è AbstractControl perchè è una base class di FormControl, FormArray e FormGroup e ci permette di leggete il valore del control passata al custom validator della funzione.
//il custom validator ritorna : 
//se la validazione fallisce, ritorna un oggetto che contiene una coppia chiave-valore dove la chiave (string) è il nome dell'errore e il valore è sempre Booleantrue
//se la validazione NON fallisce, ritorna null 
export function noWhiteSpace(control: AbstractControl): { [key: string]: boolean } | null {

    if (!control.value.trim()) {
        return { 'noWhiteSpace': true };
    }
    return null;
}