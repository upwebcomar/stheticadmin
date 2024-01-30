import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent],
  template:`
    <app-header></app-header>
    <div class="container-fluid">
        <div class="row">
            <app-sidebar></app-sidebar>
            <main></main>
        </div>
    </div>
  `,
  styles:''
})
export class DashboardComponent {

}
