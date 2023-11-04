import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'roles', loadChildren:()=> import('./roles-component/roles-component.module').then(m => m.RolesComponentModule)}
  ])],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
