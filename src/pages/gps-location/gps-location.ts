import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GpsLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gps-location',
  templateUrl: 'gps-location.html',
})
export class GpsLocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpsLocationPage');
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("LAT :",resp.coords.latitude);
      console.log("LOG :",resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log("Data LAT :",data.coords.latitude);
      console.log("Data LOG :",data.coords.longitude);
     });
  }

}
