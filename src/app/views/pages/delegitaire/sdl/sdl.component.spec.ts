import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDLComponent } from './sdl.component';

describe('SDLComponent', () => {
  let component: SDLComponent;
  let fixture: ComponentFixture<SDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
