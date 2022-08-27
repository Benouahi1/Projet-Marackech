import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAffaireJudiciaireComponent } from './show-affaire-judiciaire.component';

describe('ShowAffaireJudiciaireComponent', () => {
  let component: ShowAffaireJudiciaireComponent;
  let fixture: ComponentFixture<ShowAffaireJudiciaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAffaireJudiciaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAffaireJudiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
