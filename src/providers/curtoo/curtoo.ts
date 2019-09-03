import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Config from './../../config';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

@Injectable()
export class CurtooProvider {
  constructor(public http: Http, public platform: Platform) {
    console.log('Hello CurtooProvider Provider');
  }

  getTourism() {
    return this.http.get(
      `${Config.CURTOO_REST_API_URL}turismo`
    ).map(res => res.json());
  }

  getSchedules() {
    return this.http.get(
      `${Config.CURTOO_REST_API_URL}pra-fazer`
    ).map(res => res.json());
  }

  getCompanies() {
    return this.http.get(
      `${Config.CURTOO_REST_API_URL}guia-local`
    ).map(res => res.json());
  }

  getGourmet() {
    return this.http.get(
      `${Config.CURTOO_REST_API_URL}guia-gourmet`
    ).map(res => res.json());
  }

  /*
  registerToken(device_token: string) {
    let body = {};
    body['token'] = device_token;

    if (this.platform.is('ios')) {
      body['os'] = 'iOS'
    } else if (this.platform.is('android')) {
      body['os'] = 'Android'
    } else {
      console.log('Platform não cadastrada', device_token);
    }

    return this.http.post(
      `${Config.CURTOO_REST_API_URL}login/`, JSON.stringify(body))
    .map(res => res.json());
  } */
}
