import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponentComponent } from './agenda-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AgendaComponentComponent}
  ])],
  exports: [RouterModule]
})
export class AgendaComponentRoutingModule { }