import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../dto/login.dto';

@Component({
  selector: 'login-login-form',
  standalone: true,
  providers:[AuthService],
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" class="border rounded-2 p-3" (ngSubmit)="OnSubmit()">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          formControlName = "username">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"
          formControlName="password">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <p> {{form.value | json }} </p>
  `,
  styles: ``,

})
export class LoginFormComponent {
  form=new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private authSrv:AuthService){}

  OnSubmit(){
    const login:LoginDto = {
      username:this.form.value.username,
      password:this.form.value.password
    }
    this.authSrv.login(login).subscribe(value => {
      this.authSrv.Logs('Jwt recibido correctamente');
      this.authSrv.saveToken(value)
      
    })
    
  }
}
