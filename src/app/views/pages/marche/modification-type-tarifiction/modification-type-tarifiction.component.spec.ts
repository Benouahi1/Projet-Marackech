import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationTypeTarifictionComponent } from './modification-type-tarifiction.component';

describe('ModificationTypeTarifictionComponent', () => {
  let component: ModificationTypeTarifictionComponent;
  let fixture: ComponentFixture<ModificationTypeTarifictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationTypeTarifictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationTypeTarifictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
