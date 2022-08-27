import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStatusComponent } from './tab-status.component';

describe('TabStatusComponent', () => {
  let component: TabStatusComponent;
  let fixture: ComponentFixture<TabStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
