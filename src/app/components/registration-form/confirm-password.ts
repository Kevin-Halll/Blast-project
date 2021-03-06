import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordsMatchValidator: ValidatorFn = (control: AbstractControl):
ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  
  if( password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword?.setErrors({mismatch: true})
    return {passwordMismatch: true}
  }

  return null;
}
	
