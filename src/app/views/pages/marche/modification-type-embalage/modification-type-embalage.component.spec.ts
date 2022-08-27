import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationTypeEmbalageComponent } from './modification-type-embalage.component';

describe('ModificationTypeEmbalageComponent', () => {
  let component: ModificationTypeEmbalageComponent;
  let fixture: ComponentFixture<ModificationTypeEmbalageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationTypeEmbalageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationTypeEmbalageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
