import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeProduitComponent } from './add-type-Produit.component';

describe('AddTypeProduitComponent', () => {
  let component: AddTypeProduitComponent;
  let fixture: ComponentFixture<AddTypeProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
