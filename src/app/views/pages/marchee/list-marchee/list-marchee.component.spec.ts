import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarcheeComponent } from './list-marchee.component';

describe('ListMarcheeComponent', () => {
  let component: ListMarcheeComponent;
  let fixture: ComponentFixture<ListMarcheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMarcheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMarcheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
