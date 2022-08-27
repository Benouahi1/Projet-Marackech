import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleConventionComponent } from './detaille-convention.component';

describe('DetailleConventionComponent', () => {
  let component: DetailleConventionComponent;
  let fixture: ComponentFixture<DetailleConventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleConventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleConventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
