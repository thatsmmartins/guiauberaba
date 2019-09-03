import { NgModule } from '@angular/core';
import { TabHiddenDirective } from './tab-hidden/tab-hidden';
import { ElasticHeaderDirective } from './elastic-header/elastic-header';
import { ImgPreloadDirective } from './img-preload/img-preload';

@NgModule({
	declarations: [
		TabHiddenDirective,
		ElasticHeaderDirective,
    ImgPreloadDirective
	],
	imports: [],
	exports: [
		TabHiddenDirective,
		ElasticHeaderDirective,
    ImgPreloadDirective
	]
})
export class DirectivesModule {}
