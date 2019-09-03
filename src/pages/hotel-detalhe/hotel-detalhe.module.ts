import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelDetalhePage } from './hotel-detalhe';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    HotelDetalhePage,
  ],

  imports: [
    IonicPageModule.forChild(HotelDetalhePage),
    PipesModule,
    DirectivesModule
  ]
})

export class HotelDetalhePageModule {}
