import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoteisPage } from './hoteis';

@NgModule({
  declarations: [
    HoteisPage,
  ],

  imports: [
    IonicPageModule.forChild(HoteisPage),
    PipesModule
  ],
})

export class HoteisPageModule {}
