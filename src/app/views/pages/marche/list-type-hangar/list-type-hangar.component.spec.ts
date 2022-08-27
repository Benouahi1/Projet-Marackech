import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeHangarComponent } from './list-type-Hangar.component';

describe('ListTypeHangarComponentt', () => {
  let component: ListTypeHangarComponent;
  let fixture: ComponentFixture<ListTypeHangarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeHangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
