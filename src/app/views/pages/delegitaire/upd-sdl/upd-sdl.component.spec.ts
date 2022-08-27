import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdSDLComponent } from './upd-sdl.component';

describe('UpdSDLComponent', () => {
  let component: UpdSDLComponent;
  let fixture: ComponentFixture<UpdSDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdSDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdSDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
