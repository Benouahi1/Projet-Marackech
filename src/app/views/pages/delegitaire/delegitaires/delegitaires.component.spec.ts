import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegitairesComponent } from './delegitaires.component';

describe('DelegitairesComponent', () => {
  let component: DelegitairesComponent;
  let fixture: ComponentFixture<DelegitairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegitairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegitairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
