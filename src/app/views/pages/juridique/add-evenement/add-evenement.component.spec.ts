import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvenementComponent } from './add-evenement.component';

describe('AddEvenementComponent', () => {
  let component: AddEvenementComponent;
  let fixture: ComponentFixture<AddEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
