import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoypopularPageRoutingModule } from './nuevoypopular-routing.module';

import { NuevoypopularPage } from './nuevoypopular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoypopularPageRoutingModule
  ],
  declarations: [NuevoypopularPage]
})
export class NuevoypopularPageModule {}
