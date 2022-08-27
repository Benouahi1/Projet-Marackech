import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdAvocatComponent } from './upd-avocat.component';

describe('UpdAvocatComponent', () => {
  let component: UpdAvocatComponent;
  let fixture: ComponentFixture<UpdAvocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdAvocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
