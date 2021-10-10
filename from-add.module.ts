import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromAddComponent } from './from-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AdminModule } from '../admin/admin.module';
//import { FormsModule, ReactiveFormsModule } from 'node_modules  ggg/@angular/forms/forms';



@NgModule({
  declarations: [FromAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports: [FromAddComponent]
})
export class FromAddModule { }
