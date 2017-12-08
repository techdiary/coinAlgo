import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule} from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    // Shared Components
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ],
  providers: []
})
export class SharedModule { }
