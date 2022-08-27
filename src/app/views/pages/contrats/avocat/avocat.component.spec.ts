import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvocatComponent } from './avocat.component';

describe('AvocatComponent', () => {
  let component: AvocatComponent;
  let fixture: ComponentFixture<AvocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
