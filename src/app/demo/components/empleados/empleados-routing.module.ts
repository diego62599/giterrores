import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'empleados', loadChildren:()=> import('./empleados-component/empleados-component.module').then(m => m.EmpleadosComponentModule)}
  ])],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
