import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTableComponent } from './add-table.component';

describe('AddTableComponent', () => {
  let component: AddTableComponent;
  let fixture: ComponentFixture<AddTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
