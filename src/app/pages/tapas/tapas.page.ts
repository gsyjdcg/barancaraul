import { Component } from '@angular/core';
import { TapasService, Tapa } from '../../../services/tapas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tapas',
  templateUrl: 'tapas.page.html',
  styleUrls: ['tapas.page.scss']
})
export class TapasPage {
  constructor(protected route: ActivatedRoute,
    public tapasService: TapasService) {

   const tipo = this.route.snapshot.paramMap.get('tipo');

    this.tapasService.load(tipo);
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
