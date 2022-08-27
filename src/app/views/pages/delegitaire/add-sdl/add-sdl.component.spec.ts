import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSDLComponent } from './add-sdl.component';

describe('AddSDLComponent', () => {
  let component: AddSDLComponent;
  let fixture: ComponentFixture<AddSDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
