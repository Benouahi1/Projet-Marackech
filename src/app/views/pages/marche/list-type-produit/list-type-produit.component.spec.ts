import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeProduitComponent } from './list-type-Produit.component';

describe('ListTypeProduitComponent', () => {
  let component: ListTypeProduitComponent;
  let fixture: ComponentFixture<ListTypeProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
