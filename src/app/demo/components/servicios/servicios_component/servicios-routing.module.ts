import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ServiciosComponent}
  ])],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
