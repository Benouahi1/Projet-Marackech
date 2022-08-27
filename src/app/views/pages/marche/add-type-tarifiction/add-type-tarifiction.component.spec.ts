import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeTarifictionComponent } from './add-type-Tarifiction.component';

describe('AddTypeTarifictionComponent', () => {
  let component: AddTypeTarifictionComponent;
  let fixture: ComponentFixture<AddTypeTarifictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeTarifictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeTarifictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
