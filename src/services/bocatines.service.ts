import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bocatin {
  id: number;
  nombre: string;
  precio: number
}

@Injectable({
  providedIn: 'root'
})
export class BocatinesService {
  bocatines: Array<Bocatin>;

  constructor(protected http: HttpClient) {
  }

  load(): void {
    this.http.get('assets/data/bocatines.json').subscribe(
      (bocatines: Array<Bocatin>) => {
        this.bocatines = bocatines;
      },
      (error) => {
        console.log(error);
      });
  }
}
