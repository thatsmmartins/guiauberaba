import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantesPage } from './restaurantes';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    RestaurantesPage,
  ],

  imports: [
    IonicPageModule.forChild(RestaurantesPage),
    PipesModule,
    DirectivesModule
  ]
})

export class RestaurantesPageModule {}
