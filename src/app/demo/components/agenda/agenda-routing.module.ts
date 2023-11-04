import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'agenda', loadChildren:()=> import('./agenda-component/agenda-component.module').then(m => m.AgendaComponentModule)}
  ])],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
