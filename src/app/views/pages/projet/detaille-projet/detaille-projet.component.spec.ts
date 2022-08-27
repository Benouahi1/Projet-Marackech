import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleProjetComponent } from './detaille-projet.component';

describe('DetailleProjetComponent', () => {
  let component: DetailleProjetComponent;
  let fixture: ComponentFixture<DetailleProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
