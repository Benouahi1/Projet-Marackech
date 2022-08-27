import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConventionComponent } from './list-convention.component';

describe('ListConventionComponent', () => {
  let component: ListConventionComponent;
  let fixture: ComponentFixture<ListConventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
