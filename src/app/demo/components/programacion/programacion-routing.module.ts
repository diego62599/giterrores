import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'programacion', loadChildren:()=> import('./programacion-component/programacion-component.module').then(m => m.ProgramacionComponentModule)}
  ])],
  exports: [RouterModule]
})
export class ProgramacionRoutingModule { }
