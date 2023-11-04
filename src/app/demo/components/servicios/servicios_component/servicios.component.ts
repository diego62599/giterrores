import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Table } from 'primeng/table';

@Component({
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  providers: [MessageService]
})
export class ServiciosComponent implements OnInit {
  form: FormGroup;
  ServicioArray: any[] = [];
  currentServicioId = "";

  servicioDialog: boolean = false;
  deleteServicioDialog: boolean = false;
  deleteServiciosDialog: boolean = false;
  submitted: boolean = false;
  statuses: any[] = [];
  cols: any[] = [];
  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService

  ) {

    this.form = this.fb.group({
      servicio: new FormControl('', Validators.required),
      cantidad: new FormControl('', [Validators.required, Validators.min(1)]),
      precio: new FormControl('', [Validators.required, Validators.min(7000), Validators.max(1000000)]),
      estado: new FormControl('', Validators.required),
    });
  }

  get servicio() {
    return this.form.get('servicio') as FormControl;
  }

  get cantidad() {
    return this.form.get('cantidad') as FormControl;
  }

  get precio() {
    return this.form.get('precio') as FormControl;
  }

  get estado() {
    return this.form.get('estado') as FormControl;
  }

  ngOnInit() {

    this.getServicios();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'servicio', header: 'Servicio' },
      { field: 'cantidad', header: 'Cantidad' },
      { field: 'precio', header: 'Precio' },
      { field: 'estado', header: 'Estado' }
    ];

    this.statuses = [
      { label: 'ACTIVO', value: 'activo' },
      { label: 'INACTIVO', value: 'inactivo' }
    ];
  }

  getServicios() {
    this.http.get('http://localhost:3030/api/servicios').subscribe((resultData: any) => {
      console.log(resultData);
      this.ServicioArray = resultData.servicios;
    });
  }

  setUpdate(data: any) {
    console.log("Servicio ID a actualizar:", data.id);
    this.form.patchValue({
      servicio: data.servicio,
      cantidad: data.cantidad,
      precio: data.precio,
      estado: data.estado,
    });
    this.currentServicioId = data.id;
    this.servicioDialog = true;
  }

  openNew() {
    this.form.reset();
    this.submitted = false;
    this.servicioDialog = true;
  }

  deleteSelectedServicios() {
    this.deleteServiciosDialog = true;
  }

  editServicio(servicio: any) {
    this.form.patchValue({
      servicio: servicio.servicio,
      cantidad: servicio.cantidad,
      precio: servicio.precio,
      estado: servicio.estado,
    });
    this.currentServicioId = servicio.id;
    this.servicioDialog = true;
  }
   
  deleteServicio(servicio: any) {
    this.form.patchValue({
      id: servicio.id,
      servicio: servicio.servicio,
      cantidad: servicio.cantidad,
      precio: servicio.precio,
      estado: servicio.estado,
    });
    this.currentServicioId = servicio.id;
    this.deleteServicioDialog = true;
  }

//    confirmDeleteSelected() {
//     this.deleteServiciosDialog = false;

//     if (this.selectedProducts.length > 0) {
//         const idsToDelete = this.selectedProducts.map(servicio => servicio.id);

//         // Realiza una solicitud HTTP DELETE para eliminar los servicios seleccionados
//         // Asumiendo que la API admite la eliminación de servicios por sus IDs
//         this.http.delete('http://localhost:8097/api/servicios', { params: { ids: idsToDelete.join(',') } })
//             .subscribe((resultData: any) => {
//                 console.log(resultData);
//                 // Realiza otras acciones necesarias después de eliminar los servicios
//                 this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Servicios eliminados', life: 3000 });
//                 this.selectedProducts = [];
//                 this.getServicios(); // Actualiza la lista de servicios desde la API
//             });
//     } else {
//         // No hay servicios seleccionados para eliminar
//         this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'No se han seleccionado servicios para eliminar', life: 3000 });
//     }
// }

  confirmDelete() {
    if (this.currentServicioId) {
      this.http.delete(`http://localhost:3030/api/servicios/${this.currentServicioId}`)
        .subscribe((resultData: any) => {
          console.log(resultData);
          // Realiza otras acciones necesarias después de eliminar el servicio
          this.servicioDialog = false;
          this.form.reset();
          this.getServicios();
        });
    }
  }

  hideDialog() {
    this.servicioDialog = false;
    this.submitted = false;
}

  saveServicio() {
    this.submitted = true;

    if (this.form.valid) {
      const servicioData = this.form.value;

      if (this.currentServicioId) {
        // Actualizar un servicio existente
        this.http.put(`http://localhost:3030/api/servicios/${this.currentServicioId}`, servicioData)
          .subscribe((resultData: any) => {
            console.log(resultData);
            // Realiza otras acciones necesarias después de actualizar el servicio
            this.servicioDialog = false;
            this.form.reset();
            this.getServicios();
          });
      } else {
        // Crear un nuevo servicio
        this.http.post('http://localhost:3030/api/servicios', servicioData)
          .subscribe((resultData: any) => {
            console.log(resultData);
            // Realiza otras acciones necesarias después de crear el servicio
            this.servicioDialog = false;
            this.form.reset();
            this.getServicios();
          });
      }
    }

    
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
}
