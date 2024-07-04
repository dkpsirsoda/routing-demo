import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCantactComponent } from './department-cantact.component';

describe('DepartmentCantactComponent', () => {
  let component: DepartmentCantactComponent;
  let fixture: ComponentFixture<DepartmentCantactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentCantactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentCantactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
