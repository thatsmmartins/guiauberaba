import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestauranteDetalhePage } from './restaurante-detalhe';

@NgModule({
  declarations: [
    RestauranteDetalhePage
  ],

  imports: [
    IonicPageModule.forChild(RestauranteDetalhePage),
    PipesModule
  ],
})

export class RestauranteDetalhePageModule {}
