import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'suscripciones', loadChildren: ()=> import('./suscripciones-component/suscripciones-component.module').then(m => m.SuscripcionesComponentModule)}
  ])],
  exports: [RouterModule]
})
export class SuscripcionesRoutingModule { }
