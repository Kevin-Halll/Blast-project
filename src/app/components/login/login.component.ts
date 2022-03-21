import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) {}

  myUrl: any;

  Login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {return this.Login.get('email')}
  get password() {return this.Login.get('password')}

  submit() {
    // console.log(this.Login.getRawValue());


    const formData = this.Login.getRawValue();

    const data = {
      email: formData.email,
      password: formData.password,
      // grant_type: 'password',
      // client_id: '95df6e35-1d6a-446f-8f01-d9cb732d4f16',
      // client_secret: '6BzFuED89K27fK9gLwjrZwSgQpLeKWcz87jixk12',
      // scope: '*',
    };

    const daata = new FormData();

    daata.append("email", data.email);
    daata.append("password", data.password);
    // daata.append("grant_type", data.grant_type);
    // daata.append("client_id", data.client_id);
    // daata.append("client_secret", data.client_secret);
    // daata.append("scope", data.scope);

    this.http.post('http://10.44.16.165:8000/api/v1/login', daata).subscribe({
      next: (result: any) => {
        localStorage.setItem( 'token', result.data)
        this.router.navigate(['/']);
        // console.log('success');
        console.log(result);
      },
      error: (error) => {
        // console.log('error');
        // console.log(error);
      },
    });

    // this.http.get('http://10.44.16.51/oauth/tokens').subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
  }

}
