import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'; 
import { passwordsMatchValidator } from './confirm-password';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }

  submitted: boolean = false;
 
  // function for after form has been submitted
  submitForm(registerForm:any){
    console.log(registerForm.value)
    this.submitted = true;
  }

  // getters for returning error messages
  get firstName(){
    return this.registerForm.get('firstName')
  }

  get lastName(){
    return this.registerForm.get('lastName')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get dob(){
    return this.registerForm.get('dob')
  }

  get password(){
    return this.registerForm.get('password')
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword')
  }

  get streetAddress(){
    return this.registerForm.get(['address','streetAddress'])
  }

  get addressCity(){
    return this.registerForm.get(['address','addressCity'])
  }

  get addressParish(){
    return this.registerForm.get(['address','addressParish'])
  }
  registerForm!: FormGroup;
  ngOnInit(): void {

    // formgroup information
  this.registerForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.pattern(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)]),
    address : new FormGroup({
      streetAddress: new FormControl('', Validators.required),
      addressCity: new FormControl('', Validators.required),
      addressParish: new FormControl('' ,Validators.required)
    }),
    dob: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    confirmPassword: new FormControl('', Validators.required),
  },
  {
    validators: passwordsMatchValidator
  }
);
}

}
