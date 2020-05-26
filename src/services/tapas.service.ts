import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tapa {
  id: string;
  name: string;
  image?: string;
  price: { one?: number, half?: number, tapa?: number, precio?: number };
  tipo: string;
  allergens?: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class TapasService {
  tapas: Array<Tapa>;

  constructor(protected http: HttpClient) {
  }

  load(tipo: string): void {
    this.http.get('assets/data/tapas.json').subscribe(
      (tapas: Array<Tapa>) => {
        if (tapas?.length) {
          this.tapas = tapas.filter(t => t.tipo === tipo);
        }
      },
      (error) => {
        console.log(error);
      });
  }
}
