import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionComponentComponent } from './programacion-component.component';

describe('ProgramacionComponentComponent', () => {
  let component: ProgramacionComponentComponent;
  let fixture: ComponentFixture<ProgramacionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramacionComponentComponent]
    });
    fixture = TestBed.createComponent(ProgramacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
