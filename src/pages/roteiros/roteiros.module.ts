import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoteirosPage } from './roteiros';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    RoteirosPage,
  ],

  imports: [
    IonicPageModule.forChild(RoteirosPage),
    PipesModule,
    DirectivesModule
  ]
})

export class RoteirosPageModule {}
