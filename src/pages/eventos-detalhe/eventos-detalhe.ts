import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/*declare const google;*/

@IonicPage()
@Component({
  selector    : 'page-eventos-detalhe',
  templateUrl : 'eventos-detalhe.html',
})

export class EventosDetalhePage {
  /*
  @ViewChild('map') mapElement  : ElementRef;
  map                           : any;
  geocoder                      : any;*/
  schedule                      : any;

  constructor(
    public navCtrl        : NavController,
    public navParams      : NavParams,
    public loadingCtrl    : LoadingController
  ) { }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    this.schedule = this.navParams.get('schedule');
    /*this.initMap();


    if (this.schedule)
      this.codeAddress(this.schedule.local.address);*/
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
}
