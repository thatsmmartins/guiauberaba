import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab0Root = 'HomePage';
  tab1Root = 'RestaurantesPage';
  tab2Root = 'HoteisPage';
  tab3Root = 'RoteirosPage';
  tab4Root = 'EventosPage';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
