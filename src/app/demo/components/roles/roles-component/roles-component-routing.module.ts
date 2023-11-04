import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponentComponent } from './roles-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: RolesComponentComponent}
  ])],
  exports: [RouterModule]
})
export class RolesComponentRoutingModule { }
