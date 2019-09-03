import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

/*declare const google; */

@IonicPage()
@Component({
  selector    : 'page-roteiro-detalhe',
  templateUrl : 'roteiro-detalhe.html',
})

export class RoteiroDetalhePage {
  /*
  @ViewChild('map') mapElement  : ElementRef;
  map                           : any;
  geocoder                      : any;*/
  tourism                       : any;

  constructor(
    public navCtrl          : NavController,
    public navParams        : NavParams,
    private launchNavigator : LaunchNavigator,
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    this.tourism  = this.navParams.get('tourism');
    /*
    this.initMap();

    if (this.tourism)
      this.codeAddress(this.tourism.address);*/
  }

  /*
  initMap() {
    this.geocoder   = new google.maps.Geocoder();
    let latlng      = new google.maps.LatLng(-19.4454, -47.5555);
    let mapOptions  = {
      zoom              : 8,
      address           : '',
      center            : latlng,
      disableDefaultUI  : true
    }

    this.map        = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  codeAddress(address) {
    this.geocoder.geocode({
      address: address
    }, (results, status) => {
      if (status == 'OK') {
        this.map.setCenter(results[0].geometry.location);
        this.map.setZoom(17);
        let marker = new google.maps.Marker({
          map       : this.map,
          position  : results[0].geometry.location
        });
      } else {
        console.log(`Geocode was not successful for the following reason: ${status}`)
      }
    })
  }*/

  imageThumb(image) {
    if (image)
      return image
    else
      return ''
  }

  lauchNavigator(destination: Array<number>) {
    this.launchNavigator.navigate(destination)
      .then(
        success => console.log('Launched navigator'),
        error   => console.log('Launched navigator', error)
      );
  }
}
