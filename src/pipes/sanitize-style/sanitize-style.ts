import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeStyle'
})
@Injectable()
export class SanitizeStylePipe {

  constructor(private _sanitizer: DomSanitizer) {
    this._sanitizer = _sanitizer;
  }

  transform(value, args) {
    return this._sanitizer.bypassSecurityTrustStyle('url(' + value + ')');
  }
}
