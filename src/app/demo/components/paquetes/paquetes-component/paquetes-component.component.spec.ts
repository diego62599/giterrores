import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesComponentComponent } from './paquetes-component.component';

describe('PaquetesComponentComponent', () => {
  let component: PaquetesComponentComponent;
  let fixture: ComponentFixture<PaquetesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaquetesComponentComponent]
    });
    fixture = TestBed.createComponent(PaquetesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
