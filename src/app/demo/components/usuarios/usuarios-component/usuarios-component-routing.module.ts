import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponentComponent } from './usuarios-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: UsuariosComponentComponent}
  ])],
  exports: [RouterModule]
})
export class UsuariosComponentRoutingModule { }
