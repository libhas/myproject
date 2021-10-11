import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FromAddModule } from './from-add/from-add.module';
import { FromEditModule } from './from-edit/from-edit.module';


//import { HttpModule } from '@angular/http';
//import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AdminModule,
    BrowserAnimationsModule,
    FromAddModule,
    FromEditModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
