import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Push, PushObject, PushOptions, AndroidPushOptions, IOSPushOptions } from '@ionic-native/push';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CurtooProvider } from '../providers/curtoo/curtoo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'TabsPage';

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public curtooService: CurtooProvider,
    private push: Push,
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicial', icon: 'md-home', component: 'TabsPage' },
      { title: 'Roteiros', icon: 'roteiros', component: 'RoteirosPage'},
      { title: 'Restaurantes', icon: 'restaurantes', component: 'RestaurantesPage'},
      { title: 'Hotéis', icon: 'hoteis', component: 'HoteisPage'},
      { title: 'Eventos', icon: 'eventos', component: 'EventosPage'},
      // { title: 'Configurações', icon: 'md-settings', component: 'ConfigPage'},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });

    this.initPushNotification();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }

    const android: AndroidPushOptions = {
      senderID: '123345',
      forceShow: true,
      vibrate: true
    }

    const ios: IOSPushOptions = {
      alert: 'true',
      badge: true,
      sound: 'false'
    }

    const options: PushOptions = {
      android: android,
      ios: ios
    };
    const pushObject: PushObject = this.push.init(options);

    /*
    pushObject.on('registration').subscribe((data: any) => {
      console.log('Device token ->', data.registrationId)
      this.wordpressService.registerToken(data.registrationId)
        .subscribe((data) => {
          console.log(data);
        });
    }); */

    pushObject.on('notification').subscribe((data: any) => {
      console.log('Received a notification', data)
      // if user using app and push notification comes

    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
