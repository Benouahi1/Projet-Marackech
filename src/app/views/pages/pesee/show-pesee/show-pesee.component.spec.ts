import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPeseeComponent } from './show-pesee.component';

describe('ShowPeseeComponent', () => {
  let component: ShowPeseeComponent;
  let fixture: ComponentFixture<ShowPeseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPeseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPeseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
