import { Injectable } from '@angular/core';

export interface Allergen {
  id: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllergensService {
  allergens: Array<Allergen> = [
    {
      "id": "1",
      "name": "Pescado",
      "description": "Pescados blancos y rojos",
      "color": "",
      "icon": ""
    },
    {
      "id": "2",
      "name": "Crustáceos",
      "description": "Crustáceos, mariscos",
      "color": "",
      "icon": ""
    },
    {
      "id": "3",
      "name": "Apio",
      "description": "Apio",
      "color": "",
      "icon": ""
    },
    {
      "id": "4",
      "name": "Mostaza",
      "description": "Mostaza",
      "color": "",
      "icon": ""
    },
    {
      "id": "5",
      "name": "Huevos",
      "description": "Huevos",
      "color": "",
      "icon": ""
    },
    {
      "id": "6",
      "name": "Sésamo",
      "description": "Semillas de sésamo",
      "color": "",
      "icon": ""
    },
    {
      "id": "7",
      "name": "Cereales con gluten",
      "description": "Cereales con gluten o trigo",
      "color": "",
      "icon": ""
    },
    {
      "id": "8",
      "name": "Moluscos",
      "description": "Moluscos, caracoles",
      "color": "",
      "icon": ""
    },
    {
      "id": "9",
      "name": "Cacahuetes",
      "description": "Cacahuetes",
      "color": "",
      "icon": ""
    },
    {
      "id": "10",
      "name": "Altramuces",
      "description": "Altramuces",
      "color": "",
      "icon": ""
    },
    {
      "id": "11",
      "name": "Frutos secos",
      "description": "Frutos secos",
      "color": "",
      "icon": ""
    },
    {
      "id": "12",
      "name": "Lacteos",
      "description": "Lacteos",
      "color": "",
      "icon": ""
    },
    {
      "id": "13",
      "name": "Sulfitos",
      "description": "Sulfitos",
      "color": "",
      "icon": ""
    },
    {
      "id": "14",
      "name": "Soja",
      "description": "Soja",
      "color": "",
      "icon": ""
    }
  ];

  constructor() {
  }

  getNameById(id: string): string {
    const allergen = this.allergens.find(t => t.id === id);

    if (allergen) {
      return allergen.name;
    } else {
      return '';
    }
  }
}
