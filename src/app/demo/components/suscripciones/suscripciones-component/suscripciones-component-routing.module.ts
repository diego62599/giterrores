import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuscripcionesComponentComponent } from './suscripciones-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SuscripcionesComponentComponent}
  ])],
  exports: [RouterModule]
})
export class SuscripcionesComponentRoutingModule { }
