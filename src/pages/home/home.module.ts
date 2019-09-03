import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage,
  ],

  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    PipesModule
  ],
})

export class HomePageModule {}
