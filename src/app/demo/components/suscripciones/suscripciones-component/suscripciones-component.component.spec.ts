import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionesComponentComponent } from './suscripciones-component.component';

describe('SuscripcionesComponentComponent', () => {
  let component: SuscripcionesComponentComponent;
  let fixture: ComponentFixture<SuscripcionesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuscripcionesComponentComponent]
    });
    fixture = TestBed.createComponent(SuscripcionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
