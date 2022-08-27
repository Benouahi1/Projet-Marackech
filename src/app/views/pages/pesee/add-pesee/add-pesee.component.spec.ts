import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeseeComponent } from './add-pesee.component';

describe('AddPeseeComponent', () => {
  let component: AddPeseeComponent;
  let fixture: ComponentFixture<AddPeseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPeseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
