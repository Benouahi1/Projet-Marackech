import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdConventionComponent } from './upd-convention.component';

describe('UpdConventionComponent', () => {
  let component: UpdConventionComponent;
  let fixture: ComponentFixture<UpdConventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdConventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
