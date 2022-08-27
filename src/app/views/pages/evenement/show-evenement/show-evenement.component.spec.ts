import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEvenementComponent } from './show-evenement.component';

describe('ShowEvenementComponent', () => {
  let component: ShowEvenementComponent;
  let fixture: ComponentFixture<ShowEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
