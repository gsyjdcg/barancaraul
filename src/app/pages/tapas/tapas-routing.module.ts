import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TapasPage } from './tapas.page';

const routes: Routes = [
  {
    path: '',
    component: TapasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TapasPageRoutingModule {}
