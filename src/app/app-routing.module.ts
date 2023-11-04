import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    {path: 'roles', loadChildren:()=> import('./demo/components/roles/roles.module').then(m => m.RolesModule)},
                    {path: 'usuarios', loadChildren:()=> import('./demo/components/usuarios/usuarios.module').then(m => m.UsuariosModule)},
                    {path: 'servicios', loadChildren: () => import('./demo/components/servicios/servicio.module').then(m => m.ServicioModule)},
                    {path: 'paquetes', loadChildren: () => import('./demo/components/paquetes/paquetes.module').then(m => m.PaquetesModule)},
                    {path: 'empleados', loadChildren:()=> import('./demo/components/empleados/empleados.module').then(m => m.EmpleadosModule)},
                    {path: 'agenda', loadChildren:()=> import('./demo/components/agenda/agenda.module').then(m => m.AgendaModule)},
                    {path: 'programacion', loadChildren:()=> import('./demo/components/programacion/programacion.module').then(m => m.ProgramacionModule)},
                    {path: 'clientes', loadChildren:()=> import('./demo/components/clientes/clientes.module').then(m => m.ClientesModule)},
                    {path: 'suscripciones', loadChildren:()=> import('./demo/components/suscripciones/suscripciones.module').then(m => m.SuscripcionesModule)},
                    {path: 'citas', loadChildren:()=> import('./demo/components/citas/citas.module').then(m => m.CitasModule)},
                    {path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }

                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
