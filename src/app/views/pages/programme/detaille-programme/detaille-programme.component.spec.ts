import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleProgrammeComponent } from './detaille-programme.component';

describe('DetailleProgrammeComponent', () => {
  let component: DetailleProgrammeComponent;
  let fixture: ComponentFixture<DetailleProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
