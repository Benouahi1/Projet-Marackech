import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeTarifictionComponent } from './detail-type-tarifiction.component';

describe('DetailTypeTarifictionComponent', () => {
  let component: DetailTypeTarifictionComponent;
  let fixture: ComponentFixture<DetailTypeTarifictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTypeTarifictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTypeTarifictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
