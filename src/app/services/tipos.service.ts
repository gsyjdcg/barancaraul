import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tipo {
  id: string;
  name: string;
  image?: string;
  price: { one?: number, half?: number };
  tipo: string;
  allergens?: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  tipos: Array<Tipo>;

  constructor(protected http: HttpClient) {
  }

  getDescripcion(id: string): void {
    this.http.get('assets/data/tipos.json').subscribe(
      (tipos: Array<Tipo>) => {
        if (tipos?.length) {
          this.tapas = tipos.find(t => t.id === id);
        }
      },
      (error) => {
        console.log(error);
      });
  }
}
