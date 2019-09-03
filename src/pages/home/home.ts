import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CurtooProvider } from '../../providers/curtoo/curtoo';

@IonicPage()
@Component({
  selector    : 'page-home',
  templateUrl : 'home.html',
})

export class HomePage {
  tourismA      : Array<any> = new Array<any>();
  schedulesA    : Array<any> = new Array<any>();
  companiesA    : Array<any> = new Array<any>();
  gourmetA      : Array<any> = new Array<any>();

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public loadingCtrl    : LoadingController,
    public curtooService  : CurtooProvider
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    this.getTourism();
    this.getSchedules();
    this.getCompanies();
    this.getGourmet();
  }

  goToTab(tab) {
    this.navCtrl.parent.select(tab);
  }

  getTourism() {
    if (!(this.tourismA.length > 0)) {
      this.curtooService.getTourism()
      .subscribe(data => {
        for (let item of data) {
          if (this.tourismA.length < 3)
            this.tourismA.push(item);
        }
      });
    }
  }

  getSchedules() {
    if (!(this.schedulesA.length > 0)) {
      this.curtooService.getSchedules()
      .subscribe(data => {
        for (let item of data) {
          if (this.schedulesA.length < 3)
            this.schedulesA.push(item);
        }
      });
    }
  }

  getCompanies() {
    if (!(this.companiesA.length > 0)) {
      this.curtooService.getCompanies()
      .subscribe(data => {
        for (let item of data) {
          if (this.companiesA.length < 2)
            this.companiesA.push(item);
        }
      });
    }
  }

  getGourmet() {
    if (!(this.gourmetA.length > 0)) {
      this.curtooService.getGourmet()
      .subscribe(data => {
        for (let item of data) {
          if (this.gourmetA.length < 2)
            this.gourmetA.push(item);
        }
      });
    }
  }

  schedulesTapped(e, item) {
    this.navCtrl.push('EventosDetalhePage',     { schedule  : item });
  }

  companiesTapped(e, item) {
    this.navCtrl.push('HotelDetalhePage',       { company   : item });
  }

  gourmetTapped(e, item) {
    this.navCtrl.push('RestauranteDetalhePage', { gourmet   : item });
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
