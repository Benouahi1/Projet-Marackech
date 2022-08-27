import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegitaireComponent } from './delegitaire.component';

describe('DelegitaireComponent', () => {
  let component: DelegitaireComponent;
  let fixture: ComponentFixture<DelegitaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegitaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
