import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Racion {
  id: number;
  nombre: string;
  precio: number
}

@Injectable({
  providedIn: 'root'
})
export class RacionesService {
  raciones: Array<Racion>;

  constructor(protected http: HttpClient) {
  }

  load(): void {
    this.http.get('assets/data/raciones.json').subscribe(
      (raciones: Array<Racion>) => {
        this.raciones = raciones;
      },
      (error) => {
        console.log(error);
      });
  }
}
