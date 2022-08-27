import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdStatusComponent } from './upd-status.component';

describe('UpdStatusComponent', () => {
  let component: UpdStatusComponent;
  let fixture: ComponentFixture<UpdStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
