import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponentComponent } from './clientes-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ClientesComponentComponent}
  ])],
  exports: [RouterModule]
})
export class ClientesComponentRoutingModule { }
