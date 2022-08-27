import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgrammeComponent } from './add-programme.component';

describe('AddProgrammeComponent', () => {
  let component: AddProgrammeComponent;
  let fixture: ComponentFixture<AddProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
