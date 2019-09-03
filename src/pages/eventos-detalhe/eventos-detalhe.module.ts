import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosDetalhePage } from './eventos-detalhe';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    EventosDetalhePage
  ],

  imports: [
    IonicPageModule.forChild(EventosDetalhePage),
    PipesModule
  ],
})

export class EventosDetalhePageModule {}
