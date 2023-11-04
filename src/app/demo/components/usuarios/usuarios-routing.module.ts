import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'usuarios', loadChildren: ()=> import('./usuarios-component/usuarios-component.module').then(m => m.UsuariosComponentModule)}
  ])],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
