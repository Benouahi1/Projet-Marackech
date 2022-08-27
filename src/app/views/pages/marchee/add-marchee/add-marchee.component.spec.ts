import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarcheeComponent } from './add-marchee.component';

describe('AddMarcheeComponent', () => {
  let component: AddMarcheeComponent;
  let fixture: ComponentFixture<AddMarcheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarcheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarcheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
