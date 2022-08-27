import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridiqueComponent } from './juridique.component';

describe('JuridiqueComponent', () => {
  let component: JuridiqueComponent;
  let fixture: ComponentFixture<JuridiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuridiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
