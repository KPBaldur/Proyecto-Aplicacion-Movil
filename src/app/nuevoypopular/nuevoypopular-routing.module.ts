import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoypopularPage } from './nuevoypopular.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoypopularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoypopularPageRoutingModule {}
