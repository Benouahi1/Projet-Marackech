import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdDelegitaireComponent } from './upd-delegitaire.component';

describe('UpdDelegitaireComponent', () => {
  let component: UpdDelegitaireComponent;
  let fixture: ComponentFixture<UpdDelegitaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdDelegitaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdDelegitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
