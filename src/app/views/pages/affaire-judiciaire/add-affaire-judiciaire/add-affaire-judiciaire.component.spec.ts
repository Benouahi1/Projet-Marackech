import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAffaireJudiciaireComponent } from './add-affaire-judiciaire.component';

describe('AddAffaireJudiciaireComponent', () => {
  let component: AddAffaireJudiciaireComponent;
  let fixture: ComponentFixture<AddAffaireJudiciaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAffaireJudiciaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAffaireJudiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
