import { BlastServiceService } from './../../Services/blast-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { passwordsMatchValidator } from './confirm-password';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private http: HttpClient, private BlastServiceService: BlastServiceService) { }

  submitted: boolean = false;
  registerForm!: FormGroup;
  ngOnInit(): void {

    // load image for advert
  

    // formgroup information
  this.registerForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.pattern(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)]),
    phoneNumber: new FormControl('',[Validators.required, Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/)]),
    address : new FormGroup({
      streetAddress: new FormControl('',),
      addressCity: new FormControl('', ),
      addressParish: new FormControl('' ,)
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

  // function for after form has been submitted
  addUser(registerForm:FormGroup){
    this.submitted = true;
  if(registerForm.valid && this.submitted == true){

    const data ={
      first_name: this.firstName?.value,
      last_name: this.lastName?.value,
      email: this.email?.value,
      phone: this.phoneNumber?.value,
      password: this.password?.value,
      password_confirm: this.confirmPassword?.value,
      address: this.streetAddress?.value,
      city: this.addressCity?.value,
      parish: this.addressParish?.value,
      dob: this.dob?.value,
    }

    const userInfo = new FormData()
      userInfo.append('first_name',data.first_name);
      userInfo.append('last_name',data.last_name);
      userInfo.append('email',data.email);
      userInfo.append('phone',data.phone);
      userInfo.append('password',data.password);
      userInfo.append('password_confirmation',data.password_confirm);
      // userInfo.append('address',data.address);
      // userInfo.append('city',data.city);
      // userInfo.append('parish',data.parish);
      userInfo.append('dob',data.dob);

        this.BlastServiceService.postUser(userInfo).subscribe({
          next:(resp: any)=>{
            // console.log('User Added');
            // console.log(resp);
            alert('Sign up successful');
            this.registerForm.reset();
          },
          error:()=>{
            console.log('Error while adding user')
          }
        })
      }
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

  get phoneNumber(){
    return this.registerForm.get('phoneNumber')
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

//  view password 
public showPassword: boolean = false;
public showPassword2:boolean = false;

public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}
 
public togglePasswordVisibility2(): void {
  this.showPassword2 = !this.showPassword2;
}
selected!:string
}
