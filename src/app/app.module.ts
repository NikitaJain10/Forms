import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedFormsComponent,
    FormsModule,
    CommonModule
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // Ensure ReactiveFormsModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
