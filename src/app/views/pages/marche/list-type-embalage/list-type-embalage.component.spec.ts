import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeEmbalageComponent } from './list-type-embalage.component';

describe('ListTypeEmbalageComponent', () => {
  let component: ListTypeEmbalageComponent;
  let fixture: ComponentFixture<ListTypeEmbalageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeEmbalageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeEmbalageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
