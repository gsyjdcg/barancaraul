import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiposService } from 'src/app/services/tipos.service';
import { AllergensService } from 'src/app/services/allergens.service';
import { TapasService } from 'src/app/services/tapas.service';

@Component({
  selector: 'app-tapas',
  templateUrl: 'tapas.page.html',
  styleUrls: ['tapas.page.scss']
})
export class TapasPage {
  title: string;

  constructor(protected route: ActivatedRoute,
    public tapasService: TapasService,
    protected tiposService: TiposService,
    public allergensService: AllergensService) {

    const tipo = this.route.snapshot.paramMap.get('tipo');

    this.tapasService.load(tipo);
    this.title = this.tiposService.getNameById(tipo);
  }
}
