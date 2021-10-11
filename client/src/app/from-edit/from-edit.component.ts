import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiesService } from '../servies/my-servies.service';
import { Product } from '../types/product';


@Component({
  selector: 'app-from-edit',
  templateUrl: './from-edit.component.html',
  styleUrls: ['./from-edit.component.less']
})
export class FromEditComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({}, [], null);
  constructor(private formBulider: FormBuilder, public MyServiesService: MyServiesService) { }
  //@Input() productEzer: 
  // @Input() product: Product =;
  @Input() product: Product = { title: "", price: 0, desc: "", img: "" };
  @Input() productEzer: Object = {}
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  flag: Boolean = true;
  ngOnInit(): void {

    this.formGroup = this.formBulider.group({
      title: this.formBulider.control(this.product.title),
      price: this.formBulider.control(this.product.price),
      desc: this.formBulider.control(this.product.desc, [Validators.maxLength(15)]),
      img: this.formBulider.control(this.product.img)
    })
  }

  save(param: Object) {
    this.flag = false
    this.MyServiesService.upDate(this.productEzer, param).subscribe(a => console.log(a))
    this.clicked.emit(this.flag)
  }
  close(){
    this.formGroup.reset()
    this.clicked.emit(this.flag)
  }
   
  



}
