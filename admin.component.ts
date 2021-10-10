import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { MyServiesService } from '../servies/my-servies.service';
//  import { MatTableModule } from '@angular/material/table';
import { NEVER, Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Product } from '../types/product';
import { FormControl } from '@angular/forms';

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  constructor(public MyServiesService: MyServiesService) { }
  name!: FormControl;
  @Input() flagAdd: Boolean=false
  games$: Observable<any> = NEVER;
  prod:any ={}
  flagEdit: Boolean = false;
  displayedColumns: string[] = ['title', 'price', 'desc'];
  
  ngOnInit(): void {
    this.games$ = this.MyServiesService.getAllProduct().pipe(
      tap(u => console.log(u))
    );
    // this.MyServiesService.getAllProduct().subscribe(data => { this.products$ = data.products; }, err => { });
  }

  deleteProduct(params: Object) {
     this.MyServiesService.deletProduct(params).subscribe(
    )
    this.games$ = this.MyServiesService.getAllProduct().pipe();
  }
  changStateAdd() {
    this.flagAdd = true;
   
 
  }
  changStateEdit(p:Object) {
    
    this.prod=p
    this.flagEdit = true;
    
  }
  
  editProduct(params: Object) {
    // console.log(params);
    
  }
  closeFormEdit(){
    this.flagEdit=false
    this.games$ = this.MyServiesService.getAllProduct().pipe();
    
  }
  closeFormAdd(){
    this.flagAdd=false
    this.games$ = this.MyServiesService.getAllProduct().pipe();
  }
  SearchResults(){
    this.games$= this.MyServiesService.getFilter(this.name.value).pipe()
  }


}


