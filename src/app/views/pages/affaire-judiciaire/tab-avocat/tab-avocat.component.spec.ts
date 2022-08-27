import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAvocatComponent } from './tab-avocat.component';

describe('TabAvocatComponent', () => {
  let component: TabAvocatComponent;
  let fixture: ComponentFixture<TabAvocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAvocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
