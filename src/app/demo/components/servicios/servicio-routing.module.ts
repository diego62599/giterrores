import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'servicios', loadChildren: () => import('./servicios_component/servicios.module').then(m => m.ServiciosModule)}
  ])],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
