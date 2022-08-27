import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelegitaireComponent } from './add-delegitaire.component';

describe('AddDelegitaireComponent', () => {
  let component: AddDelegitaireComponent;
  let fixture: ComponentFixture<AddDelegitaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDelegitaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelegitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
