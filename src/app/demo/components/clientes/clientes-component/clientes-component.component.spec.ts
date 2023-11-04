import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesComponentComponent } from './clientes-component.component';

describe('ClientesComponentComponent', () => {
  let component: ClientesComponentComponent;
  let fixture: ComponentFixture<ClientesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesComponentComponent]
    });
    fixture = TestBed.createComponent(ClientesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
