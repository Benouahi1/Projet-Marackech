import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleSDLComponent } from './detaille-sdl.component';

describe('DetailleSDLComponent', () => {
  let component: DetailleSDLComponent;
  let fixture: ComponentFixture<DetailleSDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleSDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleSDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
