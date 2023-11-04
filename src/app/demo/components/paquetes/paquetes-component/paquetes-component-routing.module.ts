import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponentComponent } from './paquetes-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: PaquetesComponentComponent}
  ])],
  exports: [RouterModule]
})
export class PaquetesComponentRoutingModule { }
