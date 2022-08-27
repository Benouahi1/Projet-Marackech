import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireJudiciaireComponent } from './affaire-judiciaire.component';

describe('AffaireJudiciaireComponent', () => {
  let component: AffaireJudiciaireComponent;
  let fixture: ComponentFixture<AffaireJudiciaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireJudiciaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireJudiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
