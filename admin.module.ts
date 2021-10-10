import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FromAddModule } from '../from-add/from-add.module';
import { FromEditModule } from '../from-edit/from-edit.module';






@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FromAddModule,
    FromEditModule,
    HttpClientModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
