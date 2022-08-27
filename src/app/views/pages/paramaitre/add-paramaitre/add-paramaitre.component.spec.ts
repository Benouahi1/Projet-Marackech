import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParamaitreComponent } from './add-paramaitre.component';

describe('AddParamaitreComponent', () => {
  let component: AddParamaitreComponent;
  let fixture: ComponentFixture<AddParamaitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParamaitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParamaitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
