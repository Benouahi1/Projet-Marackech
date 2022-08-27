import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacturesComponent } from './list-factures.component';

describe('ListFacturesComponent', () => {
  let component: ListFacturesComponent;
  let fixture: ComponentFixture<ListFacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
