import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAvocatComponent } from './add-avocat.component';

describe('AddAvocatComponent', () => {
  let component: AddAvocatComponent;
  let fixture: ComponentFixture<AddAvocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAvocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
