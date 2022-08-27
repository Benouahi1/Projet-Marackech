import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleMarcheeComponent } from './detaille-marchee.component';

describe('DetailleMarcheeComponent', () => {
  let component: DetailleMarcheeComponent;
  let fixture: ComponentFixture<DetailleMarcheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleMarcheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleMarcheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
