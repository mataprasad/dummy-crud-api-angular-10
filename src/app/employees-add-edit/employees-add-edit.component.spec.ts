import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAddEditComponent } from './employees-add-edit.component';

describe('EmployeesAddEditComponent', () => {
  let component: EmployeesAddEditComponent;
  let fixture: ComponentFixture<EmployeesAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
