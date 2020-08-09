import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAddEditComponent } from './customers-add-edit.component';

describe('CustomersAddEditComponent', () => {
  let component: CustomersAddEditComponent;
  let fixture: ComponentFixture<CustomersAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
