import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeProduitComponent } from './detail-type-produit.component';

describe('DetailTypeProduitComponent', () => {
  let component: DetailTypeProduitComponent;
  let fixture: ComponentFixture<DetailTypeProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTypeProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTypeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
