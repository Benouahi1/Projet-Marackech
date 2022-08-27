import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffaireJudiciaireComponent } from './edit-affaire-judiciaire.component';

describe('EditAffaireJudiciaireComponent', () => {
  let component: EditAffaireJudiciaireComponent;
  let fixture: ComponentFixture<EditAffaireJudiciaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAffaireJudiciaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAffaireJudiciaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
