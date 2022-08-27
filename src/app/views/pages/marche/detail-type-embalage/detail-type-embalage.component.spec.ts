import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeEmbalageComponent } from './detail-type-embalage.component';

describe('DetailTypeEmbalageComponent', () => {
  let component: DetailTypeEmbalageComponent;
  let fixture: ComponentFixture<DetailTypeEmbalageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTypeEmbalageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTypeEmbalageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
