import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeseeEtape2Component } from './add-pesee-etape2.component';

describe('AddPeseeEtape2Component', () => {
  let component: AddPeseeEtape2Component;
  let fixture: ComponentFixture<AddPeseeEtape2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPeseeEtape2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeseeEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
