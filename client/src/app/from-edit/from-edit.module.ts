import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromEditComponent } from './from-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FromEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FromEditComponent]
})
export class FromEditModule { }
