import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProduitComponent } from './dashboard-produit.component';

describe('DashboardProduitComponent', () => {
  let component: DashboardProduitComponent;
  let fixture: ComponentFixture<DashboardProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
