import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-user', routerLink: ['/roles/roles']},
                    { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/usuarios/usuarios']},
                    { label: 'Servicios', icon: 'pi pi-fw pi-box', routerLink: ['/servicios/servicios']},
                    { label: 'Paquetes', icon: 'pi pi-fw pi-briefcase', routerLink: ['/paquetes/paquetes']},
                    { label: 'Empleados', icon: 'pi pi-fw pi-id-card', routerLink: ['/empleados/empleados']},
                    { label: 'Agendamiento', icon: 'pi pi-fw pi-calendar', routerLink: ['/agenda/agenda']},
                    { label: 'Programación Clases', icon: 'pi pi-fw pi-clock', routerLink: ['/programacion/programacion']},
                    { label: 'Clientes', icon: 'pi pi-fw pi-user-plus', routerLink: ['/clientes/clientes']},
                    { label: 'Suscripciónes', icon: 'pi pi-fw pi-money-bill', routerLink: ['/suscripciones/suscripciones']},
                    { label: 'Citas', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/citas/citas']},
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']}
                ]
            },
        ];
    }
}
