import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationTypeProduitComponent } from './modification-type-produit.component';

describe('ModificationTypeProduitComponent', () => {
  let component: ModificationTypeProduitComponent;
  let fixture: ComponentFixture<ModificationTypeProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationTypeProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationTypeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
