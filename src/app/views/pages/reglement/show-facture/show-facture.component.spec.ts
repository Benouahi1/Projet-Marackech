import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFactureComponent } from './show-facture.component';

describe('ShowFactureComponent', () => {
  let component: ShowFactureComponent;
  let fixture: ComponentFixture<ShowFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
