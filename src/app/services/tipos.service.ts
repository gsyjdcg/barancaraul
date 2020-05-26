import { Injectable } from '@angular/core';

export interface Tipo {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  tipos: Array<Tipo> = [
    { id: 'carne', name: 'Carne' },
    { id: 'pescado', name: 'Pescado' },
    { id: 'otros', name: 'Otros' },
    { id: 'tablas', name: 'Tablas' },
    { id: 'bocadillos', name: 'Bocadillos' },
    { id: 'especiales', name: 'Tapas Especiales' },
  ];

  constructor() {
  }

  getNameById(id: string): string {
    const tipo = this.tipos.find(t => t.id === id);

    if (tipo) {
      return tipo.name;
    } else {
      return '';
    }
  }
}
