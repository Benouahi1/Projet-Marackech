import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamaitreComponent } from './paramaitre.component';

describe('ParamaitreComponent', () => {
  let component: ParamaitreComponent;
  let fixture: ComponentFixture<ParamaitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamaitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamaitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
