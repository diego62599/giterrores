import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'paquetes', loadChildren: ()=> import('./paquetes-component/paquetes-component.module').then(m => m.PaquetesComponentModule)}
  ])],
  exports: [RouterModule]
})
export class PaquetesRoutingModule { }
