import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationTypeHangarComponent } from './modification-type-hangar.component';

describe('ModificationTypeHangarComponent', () => {
  let component: ModificationTypeHangarComponent;
  let fixture: ComponentFixture<ModificationTypeHangarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationTypeHangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationTypeHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
