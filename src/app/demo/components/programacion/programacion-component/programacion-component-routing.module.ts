import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramacionComponentComponent } from './programacion-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ProgramacionComponentComponent}
  ])],
  exports: [RouterModule]
})
export class ProgramacionComponentRoutingModule { }
