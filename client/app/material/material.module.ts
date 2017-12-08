import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  declarations: []
})
export class MaterialModule { }
