import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  template: `
  <li class="nav-item">
    <a class="nav-link" href="#">
      <span data-feather="icon"></span>
      {{content}}
    </a>
  </li>
  `,
  styles: ``
})
export class NavItemComponent {
@Input()content:string=''
@Input()icon:string=''

}
