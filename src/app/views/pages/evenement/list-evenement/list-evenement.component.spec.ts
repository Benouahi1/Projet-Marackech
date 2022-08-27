import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvenementComponent } from './list-evenement.component';

describe('ListEvenementComponent', () => {
  let component: ListEvenementComponent;
  let fixture: ComponentFixture<ListEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
