import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginFormComponent } from '../../views/login-form/login-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-main',
  standalone: true,
  imports: [CommonModule,LoginFormComponent],
  providers: [AuthService],
  template: `
  <div class="container ">
    <div class="row vh-100 align-items-center justify-content-center" >
        <login-login-form class="col" [ngClass]="widthFormClass"> </login-login-form> 
    </div>
  </div>
    
  `,
  styles: ``
})
export class MainComponent {
  widthFormClass:Record<string,boolean>={
    'col-sm-4':true
  }

}
