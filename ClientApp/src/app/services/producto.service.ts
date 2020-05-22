import { Injectable, Inject } from '@angular/core';
import { Producto } from '../Interfaces';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
  })


export class ProductoService {
  public algo: string = "Productos";
  baseUrl: string;


  constructor(protected http: HttpClient, @Inject("BASE_URL") _baseUrl: string) {
    this.baseUrl = _baseUrl;

  }

  public GetProductos(): Observable<Producto[]> {
    //return this.http.get<Producto[]>(this.baseUrl + "api/Producto/GetProductos");
    return this.http.get<Producto[]>("https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/products");
  }

  public GetProductoJ(): Observable<string> {
    return this.http.get<string>("https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/products");
  }
}
