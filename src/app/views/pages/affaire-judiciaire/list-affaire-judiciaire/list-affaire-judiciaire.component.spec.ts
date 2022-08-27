import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAffaireJudiciaireComponent } from './list-affaire-judiciaire.component';

describe('ListAffaireJudiciaireComponent', () => {
  let component: ListAffaireJudiciaireComponent;
  let fixture: ComponentFixture<ListAffaireJudiciaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAffaireJudiciaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAffaireJudiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
