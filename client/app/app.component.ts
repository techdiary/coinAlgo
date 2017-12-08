import {Component, ViewChild} from '@angular/core';
import { AuthService } from './services/auth.service';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.example-container { position: static;}']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(public auth: AuthService) { }

}
