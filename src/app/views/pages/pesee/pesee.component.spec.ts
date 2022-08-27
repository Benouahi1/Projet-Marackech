import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeseeComponent } from './pesee.component';

describe('PeseeComponent', () => {
  let component: PeseeComponent;
  let fixture: ComponentFixture<PeseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
