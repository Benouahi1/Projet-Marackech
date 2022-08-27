import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeHangarComponent } from './add-type-Hangar.component';

describe('AddTypeHangarComponent', () => {
  let component: AddTypeHangarComponent;
  let fixture: ComponentFixture<AddTypeHangarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeHangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
