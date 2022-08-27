import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabJugementComponent } from './tab-jugement.component';

describe('TabJugementComponent', () => {
  let component: TabJugementComponent;
  let fixture: ComponentFixture<TabJugementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabJugementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabJugementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
