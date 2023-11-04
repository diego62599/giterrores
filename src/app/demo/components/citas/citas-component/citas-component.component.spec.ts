import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasComponentComponent } from './citas-component.component';

describe('CitasComponentComponent', () => {
  let component: CitasComponentComponent;
  let fixture: ComponentFixture<CitasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasComponentComponent]
    });
    fixture = TestBed.createComponent(CitasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
