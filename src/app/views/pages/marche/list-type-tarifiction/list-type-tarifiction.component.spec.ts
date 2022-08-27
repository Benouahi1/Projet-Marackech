import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeTarifictionComponent } from './list-type-Tarifiction.component';

describe('ListTypeTarifictionComponent', () => {
  let component: ListTypeTarifictionComponent;
  let fixture: ComponentFixture<ListTypeTarifictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeTarifictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeTarifictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
