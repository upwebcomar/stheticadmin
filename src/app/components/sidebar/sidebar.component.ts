import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    feather.replace(); //Se necesita para los iconos de bootstrap indicados con <span data-feather="">
                      // lo reemplaza por iconos SVG
  }
}
