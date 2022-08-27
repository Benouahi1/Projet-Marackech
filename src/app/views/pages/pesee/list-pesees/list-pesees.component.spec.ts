import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeseesComponent } from './list-pesees.component';

describe('ListPeseesComponent', () => {
  let component: ListPeseesComponent;
  let fixture: ComponentFixture<ListPeseesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPeseesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPeseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
