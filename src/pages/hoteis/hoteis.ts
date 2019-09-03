import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CurtooProvider } from '../../providers/curtoo/curtoo';

@IonicPage()
@Component({
  selector    : 'page-hoteis',
  templateUrl : 'hoteis.html',
})

export class HoteisPage {
  companiesA  : Array<any> = new Array<any>();

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public loadingCtrl    : LoadingController,
    public curtooService  : CurtooProvider,
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    if (!(this.companiesA.length > 0)) {
      this.curtooService.getCompanies()
      .subscribe(data => {
        for (let item of data) {
          this.companiesA.push(item);
        }
      });
    }
  }

  companiesTapped(e, item) {
    this.navCtrl.push('HotelDetalhePage', { company : item });
  }

  imageThumb(image) {
    if (image)
      return image
    else
      return ''
  }
}
