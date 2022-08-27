import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleAvocatComponent } from './detaille-avocat.component';

describe('DetailleAvocatComponent', () => {
  let component: DetailleAvocatComponent;
  let fixture: ComponentFixture<DetailleAvocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleAvocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
