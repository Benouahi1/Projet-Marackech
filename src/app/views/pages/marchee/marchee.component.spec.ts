import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcheeComponent } from './marchee.component';

describe('MarcheeComponent', () => {
  let component: MarcheeComponent;
  let fixture: ComponentFixture<MarcheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
