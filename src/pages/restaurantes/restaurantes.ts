import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CurtooProvider } from '../../providers/curtoo/curtoo';

@IonicPage()
@Component({
  selector    : 'page-restaurantes',
  templateUrl : 'restaurantes.html',
})

export class RestaurantesPage {
  gourmetA  : Array<any> = new Array<any>();

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public loadingCtrl    : LoadingController,
    public curtooService  : CurtooProvider
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    if (!(this.gourmetA.length > 0)) {
      this.curtooService.getGourmet()
      .subscribe(data => {
        for (let item of data) {
          this.gourmetA.push(item);
        }
      });
    }
  }

  gourmetTapped(e, item) {
    this.navCtrl.push('RestauranteDetalhePage', { gourmet   : item });
  }

  imageThumb(image) {
    if (image)
      return image
    else
      return ''
  }
}
