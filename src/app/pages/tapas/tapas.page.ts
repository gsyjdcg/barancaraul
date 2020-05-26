import { Component } from '@angular/core';
import { TapasService, Tapa } from '../../../services/tapas.service';
import { ActivatedRoute } from '@angular/router';
import { TiposService } from 'src/app/services/tipos.service';
import { AllergensService } from 'src/app/services/allergens.service';

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
    protected allergensService: AllergensService) {

    const tipo = this.route.snapshot.paramMap.get('tipo');

    this.tapasService.load(tipo);
    this.title = this.tiposService.getNameById(tipo);
  }


  //   ngOnInit(): void {
  //   // Comprobar si se han pasado el identificador de la playa

  //   const playaId = this.route.snapshot.paramMap.get('playaId');

  //   if (playaId) {
  //     this.filtrosObligatorios = { playaId };

  //     this.playaService.getDatosPlayaById(playaId).then(result => {
  //       this.playa = result

  //       if (this.playa) {
  //         this.center = {
  //           lat: this.playa?.mapa?.localizacion?.lat,
  //           lng: this.playa?.mapa?.localizacion?.lng
  //         };

  //         this.zoom = this.playa?.mapa?.zoom;
  //       }
  //     }).catch(ex => {
  //       this.toastService.open({ message: this.error.getError(ex) })
  //     });
  //   }
  // }
}
