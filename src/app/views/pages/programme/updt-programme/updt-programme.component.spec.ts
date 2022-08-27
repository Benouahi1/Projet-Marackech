import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtProgrammeComponent } from './updt-programme.component';

describe('UpdtProgrammeComponent', () => {
  let component: UpdtProgrammeComponent;
  let fixture: ComponentFixture<UpdtProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdtProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdtProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
