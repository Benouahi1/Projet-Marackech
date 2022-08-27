import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgrammeComponent } from './list-programme.component';

describe('ListProgrammeComponent', () => {
  let component: ListProgrammeComponent;
  let fixture: ComponentFixture<ListProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
