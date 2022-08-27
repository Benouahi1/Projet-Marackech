import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCarreComponent } from './dashboard-carre.component';

describe('DashboardCarreComponent', () => {
  let component: DashboardCarreComponent;
  let fixture: ComponentFixture<DashboardCarreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCarreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
