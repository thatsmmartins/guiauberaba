import { NgModule } from '@angular/core';
import { SanitizeStylePipe } from './sanitize-style/sanitize-style';

@NgModule({
	declarations: [SanitizeStylePipe],
	imports: [],
	exports: [SanitizeStylePipe]
})
export class PipesModule {}
