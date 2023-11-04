import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'clientes', loadChildren: ()=> import('./clientes-component/clientes-component.module').then(m => m.ClientesComponentModule)}
  ])],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
