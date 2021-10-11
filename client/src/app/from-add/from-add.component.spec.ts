import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAddComponent } from './from-add.component';

describe('FromAddComponent', () => {
  let component: FromAddComponent;
  let fixture: ComponentFixture<FromAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
