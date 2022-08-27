import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAffaireJudiciaireDetailComponent } from './add-affaire-judiciaire-detail.component';

describe('AddAffaireJudiciaireDetailComponent', () => {
  let component: AddAffaireJudiciaireDetailComponent;
  let fixture: ComponentFixture<AddAffaireJudiciaireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAffaireJudiciaireDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAffaireJudiciaireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
