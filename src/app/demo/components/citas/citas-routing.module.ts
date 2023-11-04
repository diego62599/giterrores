import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'citas', loadChildren: ()=> import('./citas-component/citas-component.module').then(m => m.CitasComponentModule)}
  ])],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
