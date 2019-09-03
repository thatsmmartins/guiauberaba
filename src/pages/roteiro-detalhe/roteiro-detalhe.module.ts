import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoteiroDetalhePage } from './roteiro-detalhe';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RoteiroDetalhePage
  ],

  imports: [
    IonicPageModule.forChild(RoteiroDetalhePage),
    PipesModule
  ]
})

export class RoteiroDetalhePageModule {}
