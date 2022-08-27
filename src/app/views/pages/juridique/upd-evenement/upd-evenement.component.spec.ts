import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdEvenementComponent } from './upd-evenement.component';

describe('UpdEvenementComponent', () => {
  let component: UpdEvenementComponent;
  let fixture: ComponentFixture<UpdEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
