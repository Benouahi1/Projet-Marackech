import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemandeComponent } from './edit-demande.component';

describe('EditDemandeComponent', () => {
  let component: EditDemandeComponent;
  let fixture: ComponentFixture<EditDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
