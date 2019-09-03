import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CurtooProvider } from '../../providers/curtoo/curtoo';

@IonicPage()
@Component({
  selector    : 'page-eventos',
  templateUrl : 'eventos.html',
})

export class EventosPage {
  schedulesA  : Array<any> = new Array<any>();

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public loadingCtrl    : LoadingController,
    public curtooService  : CurtooProvider
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    if (!(this.schedulesA.length > 0)) {
      this.curtooService.getSchedules()
      .subscribe(data => {
        for (let item of data) {
          this.schedulesA.push(item);
        }
      });
    }
  }

  schedulesTapped(e, item) {
    this.navCtrl.push('EventosDetalhePage', { schedule  : item });
  }

  imageThumb(image) {
    if (image)
      return image
    else
      return ''
  }
}
