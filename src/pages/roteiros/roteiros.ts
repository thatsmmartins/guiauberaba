import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CurtooProvider } from '../../providers/curtoo/curtoo';

@IonicPage()
@Component({
  selector    : 'page-roteiros',
  templateUrl : 'roteiros.html',
})

export class RoteirosPage {
  tourismA  : Array<any> = new Array<any>();

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public loadingCtrl    : LoadingController,
    public curtooService  : CurtooProvider
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    if (!(this.tourismA.length > 0)) {
      this.curtooService.getTourism()
      .subscribe(data => {
        for (let item of data) {
          this.tourismA.push(item);
        }
      });
    }
  }

  tourismTapped(e, item) {
    this.navCtrl.push('RoteiroDetalhePage',     { tourism   : item });
  }

  imageThumb(image) {
    if (image)
      return image
    else
      return ''
  }
}
