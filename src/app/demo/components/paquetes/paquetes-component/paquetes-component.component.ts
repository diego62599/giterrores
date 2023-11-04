import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Table } from 'primeng/table';

@Component({
  templateUrl: './paquetes-component.component.html',
  styleUrls: ['./paquetes-component.component.scss'],
  providers: [MessageService]
})

export class PaquetesComponentComponent implements OnInit {

  form: FormGroup;
  PaqueteArray: any[] = [];
  currentPaqueteId = "";

  paqueteDialog: boolean = false;
  deletePaqueteDialog: boolean = false;
  deletePaquetesDialog: boolean = false;
  submitted: boolean = false;
  statuses: any[] = [];
  cols: any[] = [];
  rowsPerPageOptions = [5, 10, 20];

  constructor(private fb: FormBuilder, private http: HttpClient, private messageService: MessageService) {
    this.form = this.fb.group({
      paquetes: new FormControl('', Validators.required),
      servicios: new FormControl('', Validators.required),
      frecuencia: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
      total: new FormControl('', [Validators.required, Validators.min(4000), Validators.max(1000000)]),
      precioventa: new FormControl('', [Validators.required, Validators.min(4000), Validators.max(1000000)]),
      estado: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getPaquetes();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'paquetes', header: 'Paquetes' },
      { field: 'servicios', header: 'Servicios' },
      { field: 'frecuencia', header: 'Frecuencia' },
      { field: 'total', header: 'Total' },
      { field: 'precioventa', header: 'Precio Venta' },
      { field: 'estado', header: 'Estado' }
    ];

    this.statuses = [
      { label: 'ACTIVO', value: 'activo' },
      { label: 'INACTIVO', value: 'inactivo' }
    ];
  }

  getPaquetes() {
    this.http.get('http://localhost:8097/api/paquetes').subscribe((resultData: any) => {
      console.log(resultData);
      this.PaqueteArray = resultData.paquetes;
    });
  }

  setUpdate(data: any) {
    console.log("Paquete ID a actualizar:", data.id);
    this.form.patchValue({
      paquetes: data.paquetes,
      servicios: data.servicios,
      frecuencia: data.frecuencia,
      total: data.total,
      precioventa: data.precioventa,
      estado: data.estado,
    });
    this.currentPaqueteId = data.id;
    this.paqueteDialog = true;
  }

  openNew() {
    this.form.reset();
    this.submitted = false;
    this.paqueteDialog = true;
  }

  deleteSelectedPaquetes() {
    this.deletePaquetesDialog = true;
  }

  editPaquete(paquete: any) {
    this.form.patchValue({
      paquetes: paquete.paquetes,
      servicios: paquete.servicios,
      frecuencia: paquete.frecuencia,
      total: paquete.total,
      precioventa: paquete.precioventa,
      estado: paquete.estado,
    });
    this.currentPaqueteId = paquete.id;
    this.paqueteDialog = true;
  }

  deletePaquete(paquete: any) {
    this.form.patchValue({
      id: paquete.id,
      paquetes: paquete.paquetes,
      servicios: paquete.servicios,
      frecuencia: paquete.frecuencia,
      total: paquete.total,
      precioventa: paquete.precioventa,
      estado: paquete.estado,
    });
    this.currentPaqueteId = paquete.id;
    this.deletePaqueteDialog = true;
  }

  confirmDelete() {
    if (this.currentPaqueteId) {
      this.http.delete(`http://localhost:8097/api/paquetes/${this.currentPaqueteId}`)
        .subscribe((resultData: any) => {
          console.log(resultData);
          // Realiza otras acciones necesarias después de eliminar el paquete
          this.paqueteDialog = false;
          this.form.reset();
          this.getPaquetes();
        });
    }
  }
  
  hideDialog() {
    this.paqueteDialog = false;
    this.submitted = false;
  }
  
  savePaquete() {
    this.submitted = true;
  
    if (this.form.valid) {
      const paqueteData = this.form.value;
  
      if (this.currentPaqueteId) {
        // Actualizar un paquete existente
        this.http.put(`http://localhost:8097/api/paquetes/${this.currentPaqueteId}`, paqueteData)
          .subscribe((resultData: any) => {
            console.log(resultData);
            // Realiza otras acciones necesarias después de actualizar el paquete
            this.paqueteDialog = false;
            this.form.reset();
            this.getPaquetes();
          });
      } else {
        // Crear un nuevo paquete
        this.http.post('http://localhost:8097/api/paquetes', paqueteData)
          .subscribe((resultData: any) => {
            console.log(resultData);
            // Realiza otras acciones necesarias después de crear el paquete
            this.paqueteDialog = false;
            this.form.reset();
            this.getPaquetes();
          });
      }
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
