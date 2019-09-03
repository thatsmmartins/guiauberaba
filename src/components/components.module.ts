import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuiaCardComponent } from './guia-card/guia-card';

@NgModule({
	declarations: [GuiaCardComponent],
	imports: [
		IonicPageModule
	],
	exports: [GuiaCardComponent]
})
export class ComponentsModule {}
