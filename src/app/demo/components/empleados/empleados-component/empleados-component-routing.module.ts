import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponentComponent } from './empleados-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: EmpleadosComponentComponent}
  ])],
  exports: [RouterModule]
})
export class EmpleadosComponentRoutingModule { }
