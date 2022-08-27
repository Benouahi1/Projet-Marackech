import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdMarcheeComponent } from './upd-marchee.component';

describe('UpdMarcheeComponent', () => {
  let component: UpdMarcheeComponent;
  let fixture: ComponentFixture<UpdMarcheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdMarcheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdMarcheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
