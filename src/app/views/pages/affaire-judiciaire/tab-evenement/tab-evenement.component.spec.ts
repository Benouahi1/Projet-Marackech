import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEvenementComponent } from './tab-evenement.component';

describe('TabEvenementComponent', () => {
  let component: TabEvenementComponent;
  let fixture: ComponentFixture<TabEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
