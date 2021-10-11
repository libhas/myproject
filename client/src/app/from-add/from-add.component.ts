import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiesService } from '../servies/my-servies.service';


@Component({
  selector: 'app-from-add',
  templateUrl: './from-add.component.html',
  styleUrls: ['./from-add.component.less']
})
export class FromAddComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({}, [], null);
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  flag: Boolean = true
  text: String = ""
  display: String = 'none'
  constructor(private formBulider: FormBuilder, public MyServiesService: MyServiesService) { }

  ngOnInit(): void {
    this.formGroup = this.formBulider.group({
      title: this.formBulider.control(''),
      price: this.formBulider.control(''),
      desc: this.formBulider.control('', [Validators.maxLength(15)]),
      img: this.formBulider.control('')


    })
  }
  add(parameter: Object) {

    if (this.formGroup.valid) {

      this.MyServiesService.insertNewProduct(parameter).subscribe(a => console.log(a))
      this.formGroup.reset()
      this.clicked.emit(this.flag)
    }
    else {
      if (this.formGroup.dirty)

      this.text = "Up to 15 letters"
     

    }




  }
  close() {
    this.formGroup.reset()
    this.clicked.emit(this.flag)
  }


}
