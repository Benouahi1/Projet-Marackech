import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdTableComponent } from './upd-table.component';

describe('UpdTableComponent', () => {
  let component: UpdTableComponent;
  let fixture: ComponentFixture<UpdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
