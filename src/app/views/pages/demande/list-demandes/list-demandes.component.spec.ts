import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandesComponent } from './list-demandes.component';

describe('ListDemandesComponent', () => {
  let component: ListDemandesComponent;
  let fixture: ComponentFixture<ListDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
