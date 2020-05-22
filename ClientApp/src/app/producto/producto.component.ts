import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core/src/render3';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../Interfaces';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})

export class ProductoComponent {
  public lstProductos: Observable<Producto[]>;
  public json: Observable<string>;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, protected productoService: ProductoService) {
    this.GetInfo();
  }

  public GetInfo() {
    var resultado = this.productoService.GetProductos();
    this.lstProductos = resultado;
  }

  public GetInfoJ() {
    var resp = this.productoService.GetProductoJ()
    this.json = resp;
  }

  @ViewChild("txtBusqueda") bNombre: ElementRef;
  @ViewChild("ckDisponible") ckDisponible: ElementRef;
  @ViewChild("ckMayora3") ckMayora3: ElementRef;
  @ViewChild("ckMenora1") ckMenora1: ElementRef;
  @ViewChild("cbOrden") cbOrden: ElementRef;

  public Aplicar() {
    var resultado = this.productoService.GetProductos();

    var sNombre = this.bNombre.nativeElement.value.toLowerCase();
    var sDisponible = this.ckDisponible.nativeElement.checked;
    var sMayora3 = this.ckMayora3.nativeElement.checked;
    var sMenora1 = this.ckMenora1.nativeElement.checked;
    var sOrden = this.cbOrden.nativeElement.value.toLowerCase();

    if (sNombre !== "") {
      resultado = resultado.pipe(map(epics => epics.filter(epics => epics.name > sNombre)));
    }

    if (sDisponible !== "false") {
      resultado = resultado.pipe(map(epics => epics.filter(epics => epics.available === true)));
    }

    if (sMayora3 !== "false") {
      resultado = resultado.pipe(map(epics => epics.filter(epics => Number.parseInt(epics.price) > 30000)));
    }

    if (sMenora1 !== "false") {
      resultado = resultado.pipe(map(epics => epics.filter(epics => Number.parseInt(epics.price) < 10000)));
    }

    if (sOrden !== "1") {
      resultado = resultado.pipe(map(epics => epics.sort(function (a, b) {
        if (a[1] - b[1]) {
          return 0;
        }
        else {
          return (a[1] < b[1]) ? -1 : 1;
        }
      })));
    }
    else if (sOrden !== "2") {
      resultado = resultado.pipe(map(epics => epics.sort(function (a, b) {
        if (b[2] - a[2]) {
          return 0;
        }
        else {
          return (a[2] < b[2]) ? -1 : 1;
        }
      })));
    }
    else if (sOrden !== "3") {
      resultado = resultado.pipe(map(epics => epics.sort(function (a, b) {
        if (a[2] - b[2]) {
          return 0;
        }
        else {
          return (a[2] < b[2]) ? -1 : 1;
        }
      })));
    }

    this.lstProductos = resultado;
  }

}


