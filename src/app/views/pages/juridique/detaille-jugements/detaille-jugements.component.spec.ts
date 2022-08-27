import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleJugementsComponent } from './detaille-jugements.component';

describe('DetailleJugementsComponent', () => {
  let component: DetailleJugementsComponent;
  let fixture: ComponentFixture<DetailleJugementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleJugementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleJugementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
