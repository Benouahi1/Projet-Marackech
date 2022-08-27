import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeEmbalageComponent } from './add-type-embalage.component';

describe('AddTypeEmbalageComponent', () => {
  let component: AddTypeEmbalageComponent;
  let fixture: ComponentFixture<AddTypeEmbalageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeEmbalageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeEmbalageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
