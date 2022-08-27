import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleDelegitaireComponent } from './detaille-delegitaire.component';

describe('DetailleDelegitaireComponent', () => {
  let component: DetailleDelegitaireComponent;
  let fixture: ComponentFixture<DetailleDelegitaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleDelegitaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleDelegitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
